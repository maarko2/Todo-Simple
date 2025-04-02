import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile-cuidador',
  templateUrl: './profile-cuidador.page.html',
  styleUrls: ['./profile-cuidador.page.scss'],
})
export class ProfileCuidadorPage implements OnInit {
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);
  
  isEditing: boolean = false;
  user = {} as User;

  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    photoURL: new FormControl(''),
    user_type: new FormControl('cuidador' as 'cuidador' | 'adulto_mayor')
  });

  async ngOnInit() {
    await this.getUserInfo();
  }

  async getUserInfo() {
    const user = this.utilsSvc.getFromLocalStorage('user');
    if (user?.uid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        // Obtener datos actualizados de Firestore
        const path = `users/${user.uid}`;
        const userDoc = await this.firebaseSvc.getDocument(path);
        this.user = userDoc as User;
        
        // Actualizar el formulario con los datos obtenidos
        this.form.patchValue({
          uid: this.user.uid,
          email: this.user.email,
          name: this.user.name,
          photoURL: this.user.photoURL,
          user_type: this.user.user_type
        });

        // Actualizar localStorage con datos frescos
        this.utilsSvc.saveInLocalStorage('user', this.user);
      } catch (error) {
        console.log('Error al obtener información del usuario:', error);
      } finally {
        loading.dismiss();
      }
    }
  }

  async takeImage() {
    if (this.form.valid) {
      try {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Prompt
        });

        if (image) {
          const loading = await this.utilsSvc.loading();
          await loading.present();

          try {
            const blob = this.dataURLtoBlob(image.dataUrl);
            const filePath = `profileImages/${this.user.uid}`;
            
            const photoURL = await this.firebaseSvc.uploadImage(blob, filePath);
            await this.firebaseSvc.updateUserPhoto(photoURL);
            
            this.form.get('photoURL').setValue(photoURL);
            this.user.photoURL = photoURL;
            
            this.utilsSvc.saveInLocalStorage('user', this.user);

            loading.dismiss();

          } catch (error) {
            console.log('Error:', error);
            loading.dismiss();
          }
        }
      } catch (error) {
        console.log('Error al tomar la foto:', error);
      }
    }
  }

  private dataURLtoBlob(dataURL: string) {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  async saveChanges() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        const path = `users/${this.user.uid}`;
        
        // Only include fields that have values
        const formData = {
          name: this.form.value.name,
          email: this.form.value.email,
          user_type: 'cuidador' as const
        };

        // Only add photoURL if it exists
        if (this.user.photoURL) {
          formData['photoURL'] = this.user.photoURL;
        }

        // Save to Firestore with merge option
        await this.firebaseSvc.setDocument(path, formData, true);
        
        // Update local user data
        this.user = { ...this.user, ...formData };
        this.utilsSvc.saveInLocalStorage('user', this.user);
        
        this.isEditing = false;

        this.utilsSvc.presentToast({
          message: 'Perfil actualizado exitosamente',
          duration: 1500,
          color: 'success',
          position: 'middle'
        });

      } catch (error) {
        console.log('Error al actualizar perfil:', error);
        this.utilsSvc.presentToast({
          message: 'Error al actualizar el perfil',
          duration: 1500,
          color: 'danger',
          position: 'middle'
        });
      } finally {
        loading.dismiss();
      }
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.form.patchValue(this.user);
    }
  }
}
