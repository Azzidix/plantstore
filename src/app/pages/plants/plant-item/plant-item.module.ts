import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantItemPageRoutingModule } from './plant-item-routing.module';

import { PlantItemPage } from './plant-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantItemPageRoutingModule
  ],
  declarations: [PlantItemPage]
})
export class PlantItemPageModule {}
