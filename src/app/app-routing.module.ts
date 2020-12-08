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
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: {
         
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          isLogged: false
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          isLogged: false
        }
      },
      {
        path: 'history',
        component: HistoryComponent,
        data: {
          isLogged: true
        }
      },
      {
        path: 'profile',
        pathMatch: 'full',
        data: {
          isLogged: true
        },
        component: ProfileComponent
      },
      
//     {
//       path: '**',
//       component: NotFoundComponent,
//       data: {
//         title: '404'
//       }
    ]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
