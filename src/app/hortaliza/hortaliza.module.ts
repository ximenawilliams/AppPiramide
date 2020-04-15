import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HortalizaPageRoutingModule } from './hortaliza-routing.module';

import { HortalizaPage } from './hortaliza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HortalizaPageRoutingModule
  ],
  declarations: [HortalizaPage]
})
export class HortalizaPageModule {}
