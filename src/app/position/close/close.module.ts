import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { CloseMainComponent } from './close-main/close-main.component';
import { DialogCloseComponent } from './dialog-close/dialog-close.component';



@NgModule({
  declarations: [CloseMainComponent, DialogCloseComponent],
  exports: [CloseMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule
  ]
})
export class CloseModule { }