import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NasaPageComponent } from './nasa-page/nasa-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CardComponent } from './card/card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NasaPageComponent,
    SearchBarComponent,
    CardComponent,
    PageNotFoundComponent,
    DatePickerComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
