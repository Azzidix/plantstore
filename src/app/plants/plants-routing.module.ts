import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantsPage } from './plants.page';

const routes: Routes = [
  {
    path: '',
    component: PlantsPage
  },
  {
    path: 'plant-item',
    loadChildren: () => import('./plant-item/plant-item.module').then( m => m.PlantItemPageModule)
  },
  {
    path: 'plant-detail',
    loadChildren: () => import('./plant-detail/plant-detail.module').then( m => m.PlantDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantsPageRoutingModule {}
