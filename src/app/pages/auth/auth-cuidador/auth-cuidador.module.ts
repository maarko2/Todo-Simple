import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthCuidadorPageRoutingModule } from './auth-cuidador-routing.module';

import { AuthCuidadorPage } from './auth-cuidador.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthCuidadorPageRoutingModule,
    SharedModule
  ],
  declarations: [AuthCuidadorPage]
})
export class AuthCuidadorPageModule {}
