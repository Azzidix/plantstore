import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorePage } from './store.page';

const routes: Routes = [
  {
    path: '',
    component: StorePage,
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./store-transaction/store-transaction.module').then(
        (m) => m.StoreTransactionPageModule
      ),
  },
  {
    path: 'product',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./store-product/store-product.module').then(
            (m) => m.StoreProductPageModule
          ),
      },
      {
        path: 'product/edit/:productId',
        loadChildren: () =>
          import('./store-product/store-product.module').then(
            (m) => m.StoreProductPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StorePageRoutingModule {}
