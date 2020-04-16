import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuAlimentosPage } from './menu-alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: MenuAlimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuAlimentosPageRoutingModule {}
