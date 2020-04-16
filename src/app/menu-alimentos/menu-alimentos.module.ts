import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuAlimentosPageRoutingModule } from './menu-alimentos-routing.module';

import { MenuAlimentosPage } from './menu-alimentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuAlimentosPageRoutingModule
  ],
  declarations: [MenuAlimentosPage]
})
export class MenuAlimentosPageModule {}
