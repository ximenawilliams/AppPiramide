import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesayunoPageRoutingModule } from './desayuno-routing.module';

import { DesayunoPage } from './desayuno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesayunoPageRoutingModule
  ],
  declarations: [DesayunoPage]
})
export class DesayunoPageModule {}
