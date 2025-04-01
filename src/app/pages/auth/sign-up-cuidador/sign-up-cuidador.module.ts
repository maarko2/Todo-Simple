import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignUpCuidadorPageRoutingModule } from './sign-up-cuidador-routing.module';
import { SignUpCuidadorPage } from './sign-up-cuidador.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpCuidadorPageRoutingModule,
    SharedModule
  ],
  declarations: [SignUpCuidadorPage],
})
export class SignUpCuidadorPageModule {}