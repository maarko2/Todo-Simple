import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecordatoriosComponent } from './recordatorios.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RecordatoriosComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecordatoriosComponent
      }
    ])
  ]
})
export class RecordatoriosModule { }
