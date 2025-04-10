import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VincularCuentaPage } from './vincular-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: VincularCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VincularCuentaPageRoutingModule {}
