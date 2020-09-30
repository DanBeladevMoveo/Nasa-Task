import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { LastSearchesComponent } from './components/last-searches/last-searches.component';
import { LoginComponent } from './components/login/login.component';
import { NasaPageComponent } from './components/nasa-page/nasa-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfieComponent } from './components/profie/profile.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  // {path:'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'login', component: SocialLoginComponent },
  { path: 'my-map', component: GoogleMapComponent, canActivate: [AuthGuard] },
  { path: 'list', component: NasaPageComponent, canActivate: [AuthGuard] },
  {
    path: 'last-search',
    component: LastSearchesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: ProfieComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
