
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradingViewChartComponent } from './tradingViewChart/tradingViewChart.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateModule } from './create/create.module';
import { DetailsComponent } from './details/details.component';
import { EditModule } from './edit/edit.module';
import { CloseModule } from './close/close.module';


@NgModule({
  declarations: [TradingViewChartComponent, ListComponent, DetailsComponent],
  exports: [TradingViewChartComponent, CreateModule, EditModule, DetailsComponent, CloseModule],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CreateModule,
    EditModule,
    CloseModule
  ],

})
export class PositionModule { }