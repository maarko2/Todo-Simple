import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth-cuidador',
  templateUrl: './auth-cuidador.page.html',
  styleUrls: ['./auth-cuidador.page.scss'],
})
export class AuthCuidadorPage implements OnInit {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService)

  ngOnInit() {}

  async submit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        const res = await this.firebaseSvc.signIn(this.form.value as User);
        console.log(res);
        
        if (res && res.user) {
          const uid = res.user.uid;
          await this.getUserInfo(uid);
        }
      } catch (error) {
        console.log(error);
        this.utilsSvc.presentToast({
          message: 'Usuario o contraseña incorrectos',
          duration: 2500,
          color: 'danger',
          position: 'middle'
        });
      } finally {
        loading.dismiss();
      }
    }
  }

  async getUserInfo(uid: string) {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      try {
        const path = `users/${uid}`;
        const user = await this.firebaseSvc.getDocument(path) as User;

        if (user.user_type === 'cuidador') {
          this.utilsSvc.saveInLocalStorage('user', user);
          this.utilsSvc.routerLink('/main/home-cuidador');
          this.form.reset();
        } else {
          this.utilsSvc.presentToast({
            message: 'Esta cuenta no pertenece a un cuidador',
            duration: 2500,
            color: 'warning',
            position: 'middle'
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        loading.dismiss();
      }
    }
  }
}
