import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
// import { Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { FirebaseService } from '../services/firebase.service';
// import { User } from '../user';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit, OnDestroy {

  ui: firebaseui.auth.AuthUI;
  constructor(private fbService: FirebaseService, private router: Router, private afAuth: AngularFireModule, private ngZone: NgZone) { 
  }

  ngOnInit(): void {
    const uiconfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccess.bind(this),
        signInFailure: this.onLoginFail.bind(this)
        
      }
    }
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    this.ui.start('#firebaseui-auth-container',uiconfig);
}

onLoginSuccess = (result): void =>{
  console.log('login success - result: ', result );
  
  //do some stuff here
  

  this.ngZone.run(()=>
  {
    const {additionalUserInfo, user} = result
    if(additionalUserInfo.isNewUser){
      this.fbService.createUser(user)
      .then(user=> {
        console.log('new user added: ', user);
        
        this.router.navigateByUrl('profile')
      })
      .catch(err => console.log('error occured while creating error', err))
    }
    else{
      this.router.navigateByUrl('list');
    }
  
  });
        

}
onLoginFail(error) {
  console.log('errror with login: ',error);
  
}
ngOnDestroy(){
  this.ui.delete();
}
}
