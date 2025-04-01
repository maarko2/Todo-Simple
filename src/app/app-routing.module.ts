import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: 'noticias',
    loadChildren: () =>
      import('./noticias/noticias.module').then((m) => m.NoticiasModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthPageModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'recordatorios',
    loadChildren: () =>
      import('./recordatorios/recordatorios.module').then(
        (m) => m.RecordatoriosPageModule
      ),
  },
  {
    path: 'nuevo-recordatorio',
    loadChildren: () =>
      import('./recordatorios/nuevo-recordatorio/nuevo-recordatorio.module').then(
        (m) => m.NuevoRecordatorioPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'seleccion-cuenta', // Redireccionamiento automático a "seleccion-cuenta"
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'seleccion-cuenta',
    loadChildren: () => import('./pages/seleccion-cuenta/seleccion-cuenta.module').then( m => m.SeleccionCuentaPageModule)
  },
  {
    path: 'sign-up-cuidador',
    loadChildren: () =>
      import('./pages/auth/sign-up-cuidador/sign-up-cuidador.module').then(
        (m) => m.SignUpCuidadorPageModule
      ),
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
