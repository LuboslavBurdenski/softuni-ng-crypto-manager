import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterComponent
  },
  {
    path: 'history',
    pathMatch: 'full',
    component: HistoryComponent,
    canActivate: [AuthGuard],
    data:{
      isLogged: true
    }
  },
  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
