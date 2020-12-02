import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingViewChartComponent } from './tradingViewChart/tradingViewChart.component';
import { EditComponent } from './edit/edit.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateModule } from './create/create.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [TradingViewChartComponent, EditComponent, ListComponent, DetailsComponent],
  exports: [TradingViewChartComponent, EditComponent, CreateModule, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CreateModule
  ],
 
})
export class PositionModule { }
