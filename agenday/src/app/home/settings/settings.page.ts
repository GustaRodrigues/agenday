import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private afa: AngularFireAuth) { }
  
  async logout() {
    await this.afa.signOut()
  }
  
  ngOnInit() {
  }

}
