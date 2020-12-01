import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
//import { CreateComponent, DialogContentExampleDialog } from './create-old/create.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateModule } from './create/create.module';





@NgModule({
  declarations: [DetailsComponent, EditComponent, ListComponent],
  exports: [DetailsComponent, EditComponent, CreateModule],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CreateModule
  ],
 
})
export class PositionModule { }
