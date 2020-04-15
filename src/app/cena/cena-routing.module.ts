import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenaPage } from './cena.page';

const routes: Routes = [
  {
    path: '',
    component: CenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CenaPageRoutingModule {}
