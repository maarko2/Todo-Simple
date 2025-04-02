import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home-cuidador',
    loadChildren: () => import('./home-cuidador/home-cuidador.module').then( m => m.HomeCuidadorPageModule)
  },  {
    path: 'profile-cuidador',
    loadChildren: () => import('./profile-cuidador/profile-cuidador.module').then( m => m.ProfileCuidadorPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
