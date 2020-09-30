import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { LastSearchesComponent } from './components/last-searches/last-searches.component';
import { LoginComponent } from './components/login/login.component';
import { NasaPageComponent } from './components/nasa-page/nasa-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfieComponent } from './components/profie/profile.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';

const routes: Routes = [
  // {path:'login', component: LoginComponent},
  {path:'login', component: SocialLoginComponent},
  {path:'my-map', component: GoogleMapComponent},
  {path:'list', component: NasaPageComponent},
  {path:'last-search', component: LastSearchesComponent},
  {path:'profile', component: ProfieComponent},
  {path:'', redirectTo:'/my-map',pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
