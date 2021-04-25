import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewActivityPage } from './new-activity.page';

const routes: Routes = [
  {
    path: '',
    component: NewActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewActivityPageRoutingModule {}
