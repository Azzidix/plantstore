import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreProductPageRoutingModule } from './store-product-routing.module';

import { StoreProductPage } from './store-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreProductPageRoutingModule
  ],
  declarations: [StoreProductPage]
})
export class StoreProductPageModule {}
