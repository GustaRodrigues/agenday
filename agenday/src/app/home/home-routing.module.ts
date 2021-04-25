import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'add-activities',
        loadChildren: () => import('./add-activities/add-activities.module').then( m => m.AddActivitiesPageModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./progress/progress.module').then( m => m.ProgressPageModule)
      },
      {
        path: 'new-activity',
        loadChildren: () => import('./new-activity/new-activity.module').then( m => m.NewActivityPageModule)
      },
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
