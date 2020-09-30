import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NasaPageComponent } from './components/nasa-page/nasa-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardComponent } from './components/card/card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LastSearchesComponent } from './components/last-searches/last-searches.component';
import { SearchDataTableComponent } from './components/search-data-table/search-data-table.component';
import {MatTableModule} from '@angular/material/table';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ProfieComponent } from './components/profie/profile.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { GoogleAutocompleteComponent } from './components/google-autocomplete/google-autocomplete.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NasaPageComponent,
    SearchBarComponent,
    CardComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    HeaderComponent,
    LastSearchesComponent,
    SearchDataTableComponent,
    ProfieComponent,
    SocialLoginComponent,
    GoogleMapComponent,
    GoogleAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatTableModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
