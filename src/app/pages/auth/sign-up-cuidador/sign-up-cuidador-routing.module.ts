import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpCuidadorPage } from './sign-up-cuidador.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpCuidadorPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpCuidadorPageRoutingModule {}