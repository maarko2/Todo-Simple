import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoRecordatorioPageRoutingModule } from './nuevo-recordatorio-routing.module';

import { NuevoRecordatorioPage } from './nuevo-recordatorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoRecordatorioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NuevoRecordatorioPage]
})
export class NuevoRecordatorioPageModule {}
