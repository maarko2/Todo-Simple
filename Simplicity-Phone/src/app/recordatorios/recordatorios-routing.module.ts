import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordatoriosPage } from './recordatorios.page';

const routes: Routes = [
  {
    path: '',
    component: RecordatoriosPage
  },
  {
    path: 'nuevo-recordatorio',
    loadChildren: () => import('./nuevo-recordatorio/nuevo-recordatorio.module').then( m => m.NuevoRecordatorioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordatoriosPageRoutingModule {}
