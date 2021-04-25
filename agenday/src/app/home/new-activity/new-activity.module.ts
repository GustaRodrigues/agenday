import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewActivityPageRoutingModule } from './new-activity-routing.module';

import { NewActivityPage } from './new-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewActivityPageRoutingModule
  ],
  declarations: [NewActivityPage]
})
export class NewActivityPageModule {}
