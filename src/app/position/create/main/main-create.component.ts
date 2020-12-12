import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateComponent } from '../dialog/dialog-create.component';

@Component({
  selector: 'app-main-create',
  templateUrl: './main-create.component.html',
  styleUrls: ['./main-create.component.css']
})
export class MainCreateComponent implements OnInit {
  @Input() coin;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogCreateComponent, {
      width: '350px',
      direction: "ltr",

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog create is closed`);
    });
  }
}
