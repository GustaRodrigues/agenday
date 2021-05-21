import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';
import { ActivitiesManagerService } from '../../services/activities-manager.service';
import { Task } from '../../services/activities.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.page.html',
  styleUrls: ['./new-activity.page.scss'],
})
export class NewActivityPage implements OnInit {

  public activityManager = ActivitiesManagerService.getInstance(); 
  public quantityOfMembers: number = 1;
  public taskArray: string[] = [];

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  public increaseQuantityOfMembers(){
    this.quantityOfMembers +=1;
  }

  newTask(umaTask){  
    this.taskArray.push(umaTask);
  }

}