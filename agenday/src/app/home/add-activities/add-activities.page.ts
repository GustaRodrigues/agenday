import { Component, OnInit } from '@angular/core';
import { ActivitiesManagerService } from '../../services/activities-manager.service';


@Component({
  selector: 'app-add-activities',
  templateUrl: './add-activities.page.html',
  styleUrls: ['./add-activities.page.scss'],
})
export class AddActivitiesPage implements OnInit {
  public ams : ActivitiesManagerService
  public activityManager = ActivitiesManagerService.getInstance();

  constructor(private teste: ActivitiesManagerService) { 
    console.log("entrei");
  }

   async ngOnInit() {
    this.teste.setValue();
    this.teste.getValue();
    console.log("Entrei");
  }

  load() {
    location.reload();
  }

}

