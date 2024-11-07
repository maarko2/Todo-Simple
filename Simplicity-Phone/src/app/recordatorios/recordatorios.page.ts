import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
})
export class RecordatoriosPage {
  userName: string | null = null;

  constructor(private utilsSvc: UtilsService, private actionSheetCtrl: ActionSheetController, private router: Router) {
    this.getUserName();
  }

  getUserName() {
    const user = this.utilsSvc.getFromLocalStorage('user');
    if (user) {
      this.userName = user.name;
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Crear Recordatorio',
          handler: () => {
            this.router.navigate(['/nuevo-recordatorio']);
          },
        },
        {
          text: 'Eliminar Recordatorio',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

}
