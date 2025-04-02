import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileCuidadorPageRoutingModule } from './profile-cuidador-routing.module';
import { ProfileCuidadorPage } from './profile-cuidador.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ProfileCuidadorPageRoutingModule
  ],
  declarations: [ProfileCuidadorPage]
})
export class ProfileCuidadorPageModule { }
