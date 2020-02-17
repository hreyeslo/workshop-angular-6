import { RequestIdlePreloadAllModules } from 'ngx-request-idle';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'finder',
    pathMatch: 'full'
  },
  {
    path: 'finder',
    loadChildren: () => import('./pages/finder/finder.module').then(module => module.FinderModule)
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: RequestIdlePreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
