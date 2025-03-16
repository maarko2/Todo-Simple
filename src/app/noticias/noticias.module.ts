import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NoticiasComponent } from './noticias.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: NoticiasComponent
      }
    ])
  ]
})
export class NoticiasModule { }
