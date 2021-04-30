import { Component, OnInit } from '@angular/core';
import { ActivitiesManagerService } from '../../services/activities-manager.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
 
  public activityManager = ActivitiesManagerService.getInstance();

  constructor() { 
  }
  
  ngOnInit() {
  }

}
