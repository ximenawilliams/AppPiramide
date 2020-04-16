import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnackPage } from './snack.page';

const routes: Routes = [
  {
    path: '',
    component: SnackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnackPageRoutingModule {}
