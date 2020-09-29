import { Injectable } from '@angular/core';
import 'firebase/firestore'
import { AngularFirestore } from '@angular/fire/firestore';
import { UserProfile } from '../user';
import * as firebase from 'firebase'
import { AngularFireAuth } from '@angular/fire/auth';
import { SearchData } from '../searchData';
import { of } from 'rxjs';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  db = firebase.firestore();
  lastSearches: SearchData[]=[];
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }


  createUser(user) {
    const userData: UserProfile = {
      id: user.id || '',
      phoneNumber: user.phoneNumber || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      address: user.address || '',
      birthDate: user.birthDate || new Date(),
      photoURL: user.photoURL || '',
      email: user.email || '',
      uid: user.uid || ''
    };
    return this.db.collection(`users`).add(userData)
  }

  updateUser(userData) {
    this.afAuth.authState.subscribe(user => {
      this.db.collection('users').where('uid', "==", user.uid)
        .get()
        .then(querySnapshot => querySnapshot.forEach(doc => {
          const docRef = this.db.collection(`users`).doc(`${doc.id}`);
          docRef.set(userData, { merge: true })
        })).
        catch(err => console.log(`error while trying to update user: ${user.uid}`, err));
    });
  }

  addSearch(searchData: SearchData) {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.db.collection('users').where('uid', "==", user.uid)
        .limit(1)
        .get()
        .then(querySnapshot => {
          const docRef = this.db.collection(`users`).doc(`${querySnapshot.docs[0].id}`);
          this.lastSearches.unshift(searchData);
          docRef.set({ lastSearches: this.lastSearches }, { merge: true })
        })
      }
    })
  }

    getSearches(): any{
    this.afAuth.authState.subscribe(user => {
      if(user)
      {

        this.db.collection('users').where('uid', "==", user.uid)
        .limit(1)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs[0].data();   
          this.lastSearches = [...data["lastSearches"]];
          console.log(this.lastSearches);
        })
      }
    })
    return this.lastSearches;
  }


}
