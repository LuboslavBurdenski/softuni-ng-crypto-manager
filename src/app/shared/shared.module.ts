import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SumHigherThanZeroDirective } from './directives/sum-higher-than-zero.directive';
import { NotificationsComponent } from './notifications/notifications.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [SumHigherThanZeroDirective, NotificationsComponent],
  exports: [SumHigherThanZeroDirective, NotificationsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
