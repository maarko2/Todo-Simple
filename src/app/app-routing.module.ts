import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'seleccion-cuenta', // Redireccionamiento automático a "seleccion-cuenta"
    pathMatch: 'full',
  },
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
    path: 'auth-cuidador',
    loadChildren: () =>
      import('./pages/auth/auth-cuidador/auth-cuidador.module').then((m) => m.AuthCuidadorPageModule),
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
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'home-cuidador',
    loadChildren: () =>
      import('./pages/main/home-cuidador/home-cuidador.module').then((m) => m.HomeCuidadorPageModule),
  },
  {
    path: 'profile-cuidador',
    loadChildren: () =>
      import('./pages/main/profile-cuidador/profile-cuidador.module').then((m) => m.ProfileCuidadorPageModule),
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
  {
    path: 'main/home-cuidador',
    loadChildren: () => import('./pages/main/home-cuidador/home-cuidador.module').then(m => m.HomeCuidadorPageModule)
  },
  {
    path: 'gestion-perfiles',
    loadChildren: () => import('./pages/main/home-cuidador/gestion-perfiles/gestion-perfiles.module').then(m => m.GestionPerfilesPageModule)
  },
  {
    path: 'vincular-cuenta',
    loadChildren: () => import('./pages/main/home-cuidador/vincular-cuenta/vincular-cuenta.module').then( m => m.VincularCuentaPageModule)
  },
  {
    path: 'config-preferencias',
    loadChildren: () => import('./pages/main/home-cuidador/gestion-perfiles/config-preferencias/config-preferencias.module').then( m => m.ConfigPreferenciasPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
