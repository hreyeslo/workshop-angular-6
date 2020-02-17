import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FinderComponent } from './component/finder.component';

const routes: Routes = [
  {
    path: '',
    component: FinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinderRoutingModule {}
