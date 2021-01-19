import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreProductPage } from './store-product.page';

const routes: Routes = [
  {
    path: '',
    component: StoreProductPage
  },
  {
    path: 'product-add',
    loadChildren: () => import('./product-add/product-add.module').then( m => m.ProductAddPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreProductPageRoutingModule {}
