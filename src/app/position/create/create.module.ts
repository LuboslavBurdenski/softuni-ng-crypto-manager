import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainComponent, DialogComponent],
  exports: [MainComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ],
  
})
export class CreateModule { }
