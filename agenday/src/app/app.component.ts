import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ActivitiesManagerService } from './services/activities-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage,
    private ActivitiesManagerService: ActivitiesManagerService) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
     this.ActivitiesManagerService.setValue();
     
     this.ActivitiesManagerService.getValue();
  }

  

}
