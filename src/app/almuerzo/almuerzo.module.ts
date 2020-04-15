import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlmuerzoPageRoutingModule } from './almuerzo-routing.module';

import { AlmuerzoPage } from './almuerzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlmuerzoPageRoutingModule
  ],
  declarations: [AlmuerzoPage]
})
export class AlmuerzoPageModule {}
