import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './create/main/main.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';



const routes: Routes = [
  {
    path: 'position',
    children: [
      {
        path: 'list', 
        pathMatch: 'full',
        component: ListComponent,
      },
      {
        path: 'chart/:id',
        pathMatch: 'full',
        component: DetailsComponent, 
      },
      {
        path: 'edit/:id',
        pathMatch: 'full',
        component: EditComponent, 
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }