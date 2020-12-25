import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  {
    path: "plants",
    loadChildren: () =>
      import("./plants/plants.module").then((m) => m.PlantsPageModule),
  },
  {
    path: "store",
    loadChildren: () =>
      import("./store/store.module").then((m) => m.StorePageModule),
  },
  {
    path: "checkout",
    loadChildren: () =>
      import("./checkout/checkout.module").then((m) => m.CheckoutPageModule),
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./menu/menu.module").then((m) => m.MenuPageModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./menu/about/about.module").then((m) => m.AboutPageModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./menu/contact/contact.module").then((m) => m.ContactPageModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./menu/users/users.module").then((m) => m.UsersPageModule),
  },
  {
    path: "transaction",
    loadChildren: () =>
      import("./menu/transaction/transaction.module").then(
        (m) => m.TransactionPageModule
      ),
  },
  {
    path: "store",
    loadChildren: () =>
      import("./store/store.module").then((m) => m.StorePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
