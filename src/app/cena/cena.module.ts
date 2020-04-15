import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CenaPageRoutingModule } from './cena-routing.module';

import { CenaPage } from './cena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CenaPageRoutingModule
  ],
  declarations: [CenaPage]
})
export class CenaPageModule {}
