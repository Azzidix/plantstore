import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreTransactionPageRoutingModule } from './store-transaction-routing.module';

import { StoreTransactionPage } from './store-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreTransactionPageRoutingModule
  ],
  declarations: [StoreTransactionPage]
})
export class StoreTransactionPageModule {}
