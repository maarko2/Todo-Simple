import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VincularCuentaPageRoutingModule } from './vincular-cuenta-routing.module';

import { VincularCuentaPage } from './vincular-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VincularCuentaPageRoutingModule
  ],
  declarations: [VincularCuentaPage]
})
export class VincularCuentaPageModule {}
