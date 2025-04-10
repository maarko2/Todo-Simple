import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCuidadorPage } from './home-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCuidadorPage
  },
  {
    path: 'gestion-perfiles',
    loadChildren: () => import('./gestion-perfiles/gestion-perfiles.module').then( m => m.GestionPerfilesPageModule)
  },
  {
    path: 'vincular-cuenta',
    loadChildren: () => import('./vincular-cuenta/vincular-cuenta.module').then( m => m.VincularCuentaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCuidadorPageRoutingModule {}
