import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent implements OnInit, OnDestroy {
  ui: firebaseui.auth.AuthUI;
  constructor(
    private fbService: FirebaseService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    const uiconfig = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: this.onLoginSuccess.bind(this),
        signInFailure: this.onLoginFail.bind(this),
      },
    };
    this.ui = new firebaseui.auth.AuthUI(firebase.auth());
    this.ui.start('#firebaseui-auth-container', uiconfig);
  }

  onLoginSuccess = (result): void => {
    console.log('login success - result: ', result);

    this.ngZone.run(() => {
      const { additionalUserInfo, user,operationType } = result;
      if (additionalUserInfo.isNewUser || (operationType === "signIn" && !user.uid) ) {
        this.fbService
          .createUser(user)
          .then((user) => {
            console.log('new user added: ', user);

            this.router.navigateByUrl('profile');
          })
          .catch((err) =>
            console.log('error occured while creating error', err)
          );
      } else {
        this.router.navigateByUrl('list');
      }
    });
  };
  onLoginFail(error) {
    console.log('errror with login: ', error);
  }
  ngOnDestroy() {
    this.ui.delete();
  }
}
