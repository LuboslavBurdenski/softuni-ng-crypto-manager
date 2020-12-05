import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { MainComponent } from './create/main/main.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { TradingViewChartComponent } from './tradingViewChart/tradingViewChart.component';



const routes: Routes = [
  {
    path: 'position',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/position/list'
      },
      {
        path: 'list',
        pathMatch: 'full',
        data: {
          isLogged: true
        },
        component: ListComponent,
      },
      {
        path: 'details/:id',
        pathMatch: 'full',
        data: {
          isLogged: true
        },
        component: DetailsComponent,
      },
      {
        path: 'chart/:id',
        pathMatch: 'full',data: {
          isLogged: true
        },
        component: TradingViewChartComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }