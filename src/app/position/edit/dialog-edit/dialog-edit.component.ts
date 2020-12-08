import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PositionCreationService } from '../../position-creation.service';
import { EditMainComponent } from '../edit-main/edit-main.component';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit, OnDestroy {
  currentData;
  editFormValue;

  get editedData(){
    return this.positionCreationService.dataAfterEditing;
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditMainComponent>,
    private positionCreationService: PositionCreationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.editedData);
    if (!this.editedData) {
      this.currentData = this.data;
    } else {
      this.currentData = this.editedData;
    }
  }

  onEdit(editForm) {
    this.editFormValue = editForm.value;
    this.positionCreationService.dataAfterEditing = this.editFormValue;
    console.log(this.editedData);
    this.positionCreationService.editPosition(this.router.url.split('/')[3], editForm.value).subscribe(resp => console.log(resp))
  }
  ngOnDestroy() {
   
    this.dialogRef.close(this.editFormValue);
  }

}
