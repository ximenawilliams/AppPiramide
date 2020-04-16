import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicadasPageRoutingModule } from './picadas-routing.module';

import { PicadasPage } from './picadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicadasPageRoutingModule
  ],
  declarations: [PicadasPage]
})
export class PicadasPageModule {}
