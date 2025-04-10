import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPerfilesPage } from './gestion-perfiles.page';

const routes: Routes = [
  {
    path: '',
    component: GestionPerfilesPage
  },
  {
    path: 'config-preferencias',
    loadChildren: () => import('./config-preferencias/config-preferencias.module').then( m => m.ConfigPreferenciasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPerfilesPageRoutingModule {}
