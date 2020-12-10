import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SumHigherThanZeroDirective } from './directives/sum-higher-than-zero.directive';



@NgModule({
  declarations: [SumHigherThanZeroDirective],
  exports: [SumHigherThanZeroDirective],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
