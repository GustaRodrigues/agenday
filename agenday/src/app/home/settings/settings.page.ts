import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataBaseService } from 'src/app/services/data-base.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private afa: AngularFireAuth,
              private dataBaseService: DataBaseService) { }
  
  async logout() {
    await this.afa.signOut();
  }
  
  ngOnInit() {
    this.dataBaseService.readUser();
  }
}
