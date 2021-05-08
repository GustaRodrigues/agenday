import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  userName: string;
  userMobile: number;
  userBirthDate: string;

  constructor(private afs: AngularFirestore,
    private afa: AngularFireAuth) { }

  readUser() {

    return this.afa.currentUser.then(uid => {
      this.afs.collection<User>('users').doc(`${uid.uid}`).snapshotChanges().subscribe(data => {
        console.log(uid.uid);
        console.log(data.payload.id);
        console.log(uid.email);
        this.userName = data.payload.data()['name'];
        console.log(data.payload.data()['birthDate']);
        console.log(data.payload.data()['mobile']);
      })
    })
  }
}
