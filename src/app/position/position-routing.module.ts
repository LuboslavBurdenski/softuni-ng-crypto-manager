import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './create/main/main.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { TradingViewChartComponent } from './tradingViewChart/tradingViewChart.component';



const routes: Routes = [
  {
    path: 'position',
    children: [
      {
        path: 'list', 
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: 'details/:id',
        pathMatch: 'full',
        component: DetailsComponent, 
      },
      {
        path: 'chart/:id',
        pathMatch: 'full',
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