import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesayunoPage } from './desayuno.page';

const routes: Routes = [
  {
    path: '',
    component: DesayunoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesayunoPageRoutingModule {}
