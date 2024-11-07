import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoRecordatorioPage } from './nuevo-recordatorio.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoRecordatorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoRecordatorioPageRoutingModule {}
