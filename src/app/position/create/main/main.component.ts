import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() coin;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.coin);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      direction: "ltr",

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
