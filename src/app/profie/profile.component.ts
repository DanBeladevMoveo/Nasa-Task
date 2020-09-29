import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FirebaseService } from '../services/firebase.service';
import { isValidID, print } from '../utils';

@Component({
  selector: 'app-profie',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfieComponent implements OnInit {
  downloadURL: Observable<string>;
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService, private router: Router, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  profileForm = this.fb.group({
    email: ['dan@gmail.com', Validators.compose([Validators.required, Validators.email])],
    firstName: ['dan', Validators.compose([Validators.required,Validators.pattern('[a-zA-Z ]*'),])],
    lastName: ['beladev', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'),])],
    address: ['rami2 haifa', Validators.compose([Validators.required])],
    birthDate: ['', Validators.compose([Validators.required])],
    id: ['205684277', Validators.compose([Validators.required, this.checkID()])],
    phoneNumber: ['0528304112', Validators.compose([Validators.required, Validators.minLength(10)])],
    photoURL: ['', Validators.compose([Validators.required])],
  })

  submit(){
    this.firebaseService.updateUser(this.profileForm.value);
    this.router.navigateByUrl('/list');
  }

  checkID(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return !isValidID(control.value) ? { forbiddenID: { value: control.value, valid: false } } : null;
    };
  }

  onFileSelected(event) {
    // console.log('event: ', event);
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            console.log("url: " + url)
            if (url) {
              this.profileForm.controls.photoURL.setValue(url);
              // this.profileForm.controls['photoURL'].setValue(url);
            }
          });
        })
        
      )/* .subscribe(url => {
        if(url){
          console.log(url);
          
        }
      }) */
  }
}
