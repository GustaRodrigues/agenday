import { Component, OnInit } from '@angular/core';
import { ActivitiesManagerService } from '../../services/activities-manager.service';


@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.page.html',
  styleUrls: ['./new-activity.page.scss'],
})
export class NewActivityPage implements OnInit {

  public activityManager = ActivitiesManagerService.getInstance(); 
  public quantityOfMembers: number = 1;

  constructor() { }

  ngOnInit() {
  }

  public increaseQuantityOfMembers(){
    this.quantityOfMembers +=1;
  }

}
