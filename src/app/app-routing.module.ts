import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
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
          isLogged: true,
          showBalance: false,
        },
        component: ProfileComponent
      },
      {
        path: 'not-found',
        pathMatch: 'full',
        component: NotFoundComponent,
        data: {
        }
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/not-found'
      }

    ]
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
