import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddActivitiesPageRoutingModule } from './add-activities-routing.module';

import { AddActivitiesPage } from './add-activities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivitiesPageRoutingModule
  ],
  declarations: [AddActivitiesPage]
})
export class AddActivitiesPageModule {}
