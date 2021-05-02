import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userCollection: AngularFirestoreCollection<User>
  constructor(private afa: AngularFireAuth, 
              private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>('users');
  }

  login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
      const uid = data.user.uid;
      const users = this.userCollection;
      users.doc(uid).set({
        name: user.name, mobile: user.mobile, birthDate: user.birthDate
      })
    });
  }

  logout() {
    return this.afa.signOut();
  }

  getAuth() {
    return this.afa;
  };



}
