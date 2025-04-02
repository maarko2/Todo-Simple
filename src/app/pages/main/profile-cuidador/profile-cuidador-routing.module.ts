import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileCuidadorPage } from './profile-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileCuidadorPageRoutingModule {}
