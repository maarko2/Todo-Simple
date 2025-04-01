import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionCuentaPage } from './seleccion-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionCuentaPageRoutingModule {}
