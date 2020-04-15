import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerealesPageRoutingModule } from './cereales-routing.module';

import { CerealesPage } from './cereales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerealesPageRoutingModule
  ],
  declarations: [CerealesPage]
})
export class CerealesPageModule {}
