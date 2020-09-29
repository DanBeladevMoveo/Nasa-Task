import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NASA-task';

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
    firebase.analytics();
  }
}
