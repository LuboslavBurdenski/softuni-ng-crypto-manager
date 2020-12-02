import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      direction: "ltr",
      data : "some data!!!",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
