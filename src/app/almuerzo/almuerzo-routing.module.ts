import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmuerzoPage } from './almuerzo.page';

const routes: Routes = [
  {
    path: '',
    component: AlmuerzoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmuerzoPageRoutingModule {}
