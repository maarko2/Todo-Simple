import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { SeleccionCuentaPageRoutingModule } from './seleccion-cuenta-routing.module';

import { SeleccionCuentaPage } from './seleccion-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionCuentaPageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionCuentaPage]
})
export class SeleccionCuentaPageModule {}
