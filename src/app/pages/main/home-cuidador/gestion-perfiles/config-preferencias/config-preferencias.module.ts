import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigPreferenciasPageRoutingModule } from './config-preferencias-routing.module';

import { ConfigPreferenciasPage } from './config-preferencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigPreferenciasPageRoutingModule
  ],
  declarations: [ConfigPreferenciasPage]
})
export class ConfigPreferenciasPageModule {}
