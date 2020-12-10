import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { EditMainComponent } from './edit-main/edit-main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DialogEditComponent, EditMainComponent],
  exports: [EditMainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class EditModule { }
