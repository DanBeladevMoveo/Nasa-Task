import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastSearchesComponent } from './last-searches/last-searches.component';
import { LoginComponent } from './login/login.component';
import { NasaPageComponent } from './nasa-page/nasa-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfieComponent } from './profie/profile.component';
import { SocialLoginComponent } from './social-login/social-login.component';

const routes: Routes = [
  // {path:'login', component: LoginComponent},
  {path:'login', component: SocialLoginComponent},
  {path:'list', component: NasaPageComponent},
  {path:'last-search', component: LastSearchesComponent},
  {path:'profile', component: ProfieComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
