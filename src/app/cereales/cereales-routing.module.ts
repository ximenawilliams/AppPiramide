import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerealesPage } from './cereales.page';

const routes: Routes = [
  {
    path: '',
    component: CerealesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerealesPageRoutingModule {}
