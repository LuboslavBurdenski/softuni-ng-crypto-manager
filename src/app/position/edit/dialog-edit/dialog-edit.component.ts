import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  currentData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.currentData = this.data;
    console.log(this.currentData);
  } 

  ngOnInit(): void {
  }
  onEdit(editForm) {
    console.log(editForm.value);
  }

}
