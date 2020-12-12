import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCreateComponent } from './main/main-create.component';
import { DialogCreateComponent } from './dialog/dialog-create.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from "@angular/forms";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MainCreateComponent, DialogCreateComponent],
  exports: [MainCreateComponent, DialogCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ],
  
})
export class CreateModule { }
