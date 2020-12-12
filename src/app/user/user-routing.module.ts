import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: 'user',
        canActivateChild: [AuthGuard],
        children: [
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
                path: '**',
                pathMatch: 'full',
                redirectTo: '/not-found'
            }
        ],
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }