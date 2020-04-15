import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HortalizaPage } from './hortaliza.page';

const routes: Routes = [
  {
    path: '',
    component: HortalizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HortalizaPageRoutingModule {}
