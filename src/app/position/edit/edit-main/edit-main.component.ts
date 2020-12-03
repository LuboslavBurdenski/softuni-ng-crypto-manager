import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent  {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '350px',
      direction: "ltr",
      data : {
        entry: 5654.56,
        target: 10000.00,
        stop: 5000,
        sum: 5000
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: edit`);
    });
  }

}
