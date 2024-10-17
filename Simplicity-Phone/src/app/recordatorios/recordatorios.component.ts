import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.component.html',
  styleUrls: ['./recordatorios.component.scss'],
})
export class RecordatoriosComponent {
  userName: string | null = null;

  constructor(private utilsSvc: UtilsService, private actionSheetCtrl: ActionSheetController) {
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
          data: {
            action: '',
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
