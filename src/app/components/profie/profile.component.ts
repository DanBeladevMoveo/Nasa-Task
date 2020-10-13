import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageModule,
} from '@angular/fire/storage';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FirebaseService } from '../../services/firebase.service';
import { isValidID, print } from '../../utils';

@Component({
  selector: 'app-profie',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfieComponent implements OnInit {
  downloadURL: Observable<string>;
  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  profileForm = this.fb.group({
    email: [
      '',
      Validators.compose([Validators.required, Validators.email]),
    ],
    firstName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
    ],
    lastName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
    ],
    address: ['', Validators.compose([Validators.required])],
    birthDate: ['', Validators.compose([Validators.required])],
    id: [
      '',
      Validators.compose([Validators.required, this.checkID()]),
    ],
    phoneNumber: [
      '',
      Validators.compose([Validators.required, Validators.minLength(10)]),
    ],
    photoURL: ['', Validators.compose([Validators.required])],
  });

  submit() {
    this.firebaseService.updateUser(this.profileForm.value);
    this.router.navigateByUrl('/list');
  }

  checkID(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return !isValidID(control.value)
        ? { forbiddenID: { value: control.value, valid: false } }
        : null;
    };
  }

  onFileSelected(event) {
    // console.log('event: ', event);
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url) => {
          console.log('url: ' + url);
          if (url) {
            this.profileForm.controls.photoURL.setValue(url);
            // this.profileForm.controls['photoURL'].setValue(url);
          }
        });
      })
    ); /* .subscribe(url => {
        if(url){
          console.log(url);
          
        }
      }) */
  }
}
