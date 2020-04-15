import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutasPageRoutingModule } from './frutas-routing.module';

import { FrutasPage } from './frutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutasPageRoutingModule
  ],
  declarations: [FrutasPage]
})
export class FrutasPageModule {}
