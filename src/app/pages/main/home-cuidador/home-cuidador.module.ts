import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeCuidadorPageRoutingModule } from './home-cuidador-routing.module';
import { HomeCuidadorPage } from './home-cuidador.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCuidadorPageRoutingModule,
    SharedModule
  ],
  declarations: [HomeCuidadorPage]
})
export class HomeCuidadorPageModule {}
