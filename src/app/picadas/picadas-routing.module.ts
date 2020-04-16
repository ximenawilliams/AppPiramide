import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicadasPage } from './picadas.page';

const routes: Routes = [
  {
    path: '',
    component: PicadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PicadasPageRoutingModule {}
