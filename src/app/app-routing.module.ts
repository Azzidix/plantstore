import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'plants',
    loadChildren: () =>
      import('./pages/plants/plants.module').then((m) => m.PlantsPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./pages/store/store.module').then((m) => m.StorePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then(
        (m) => m.CheckoutPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/menu/about/about.module').then((m) => m.AboutPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/menu/contact/contact.module').then(
        (m) => m.ContactPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/menu/users/users.module').then((m) => m.UsersPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'transaction',
    loadChildren: () =>
      import('./pages/menu/transaction/transaction.module').then(
        (m) => m.TransactionPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./pages/store/store.module').then((m) => m.StorePageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/menu/search/search.module').then(
        (m) => m.SearchPageModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
