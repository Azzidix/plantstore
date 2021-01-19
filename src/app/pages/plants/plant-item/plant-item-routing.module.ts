import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantItemPage } from './plant-item.page';

const routes: Routes = [
  {
    path: '',
    component: PlantItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantItemPageRoutingModule {}
