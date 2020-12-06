import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PositionCreationService } from '../../position-creation.service';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';


@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent {
  @Input() details
  get detailsForEdit() {
    return this.positionCreationService.detailsForEdit;
  }
  constructor(public dialog: MatDialog, private positionCreationService: PositionCreationService) {
    console.log(this.detailsForEdit);
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
      console.log(`Dialog result: edit`);
    });
  }

}
