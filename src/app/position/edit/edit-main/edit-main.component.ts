import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PositionCreationService } from '../../position-creation.service';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent {
  @Input() details;
  @Output() newEditValues = new EventEmitter<string>();
  
  get detailsForEdit() {
    return this.positionCreationService.detailsForEdit;
  }
  constructor(public dialog: MatDialog, private positionCreationService: PositionCreationService) {
    console.log(this.detailsForEdit);
  }
  addNewItem(resultFromDialogEdit) {
    this.newEditValues.emit(resultFromDialogEdit);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '350px',
      direction: "ltr",
      data: {
        entry: this.detailsForEdit.entry,
        target: this.detailsForEdit.target,
        stop: this.detailsForEdit.stop,
        sum: this.detailsForEdit.sum,
        id: this.detailsForEdit._id
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.addNewItem(result);
      console.log(`Dialog edit result: ${result}`);
    });
  }
  ngOnDestroy() {
    this.positionCreationService.dataAfterEditing = '';
  }
}
