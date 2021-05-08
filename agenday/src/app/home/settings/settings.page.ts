import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/interfaces/user';
import { DataBaseService } from 'src/app/services/data-base.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  users: any;
  userName: string;
  userMobile: string;
  userBirthDate: string;
  userEmail: string;



  constructor(private afa: AngularFireAuth,
    private afs: AngularFirestore) {
      
      this.afa.currentUser.then(uid => {
        this.afs.collection<User>('users').snapshotChanges().subscribe(data => {
          this.users = data.map(e => {
            if(uid.uid === e.payload.doc.id) {
              return {
                Uid: uid.uid,
                Name: e.payload.doc.data()['name'],
                Email: uid.email,
                Mobile: e.payload.doc.data()['mobile'],
                BirthDate: e.payload.doc.data()['birthDate']
              }
            }
              return {
                Uid: "",
                Name: "",
                Email: "",
                Mobile: "",
                BirthDate: ""
              }
          })
          
          const user = this.users.find( data => {
           return data.Uid == uid.uid;
            
          })
          
          this.userName = user.Name;
          this.userEmail = user.Email;
          this.userMobile = user.Mobile;
          this.userBirthDate = user.BirthDate;
  
        })
      })
     }

  async logout() {
    await this.afa.signOut();
  }

  ngOnInit() {
    
  }
}
