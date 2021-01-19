import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreProductPage } from './store-product.page';

const routes: Routes = [
  {
    path: '',
    component: StoreProductPage,
  },
  {
    path: ':productId',
    loadChildren: () =>
      import('./store-product.module').then((m) => m.StoreProductPageModule),
  },
  {
    path: 'product/add',
    loadChildren: () =>
      import('./product-add/product-add.module').then(
        (m) => m.ProductAddPageModule
      ),
  },
  {
    path: 'product/detail',
    loadChildren: () =>
      import('./product-detail/product-detail.module').then(
        (m) => m.ProductDetailPageModule
      ),
  },
  {
    path: 'product/edit',
    loadChildren: () =>
      import('./product-edit/product-edit.module').then(
        (m) => m.ProductEditPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreProductPageRoutingModule {}
