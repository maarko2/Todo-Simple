import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'noticias',
    loadChildren: () =>
      import('./noticias/noticias.module').then((m) => m.NoticiasModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'recordatorios',
    loadChildren: () =>
      import('./recordatorios/recordatorios.module').then(
        (m) => m.RecordatoriosModule
      ),
  },
  {
    path: '',
    redirectTo: 'auth', // Redireccionamiento Automático a "auth"
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
