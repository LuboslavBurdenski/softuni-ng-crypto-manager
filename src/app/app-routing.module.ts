import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


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
