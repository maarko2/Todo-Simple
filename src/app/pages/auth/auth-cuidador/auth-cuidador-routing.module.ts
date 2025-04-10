import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthCuidadorPage } from './auth-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: AuthCuidadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthCuidadorPageRoutingModule {}
