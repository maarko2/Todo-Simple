import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigPreferenciasPage } from './config-preferencias.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigPreferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigPreferenciasPageRoutingModule {}
