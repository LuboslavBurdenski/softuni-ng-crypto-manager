import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NavigationComponent,
  ],
  exports:[NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
})
export class CoreModule { }
