import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddActivitiesPage } from './add-activities.page';

const routes: Routes = [
  {
    path: '',
    component: AddActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddActivitiesPageRoutingModule {}
