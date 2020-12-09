import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PositionCreationService } from '../../position-creation.service';
import { DialogCloseComponent } from '../dialog-close/dialog-close.component';

@Component({
  selector: 'app-close-main',
  templateUrl: './close-main.component.html',
  styleUrls: ['./close-main.component.css']
})
export class CloseMainComponent {
  @Input() details;
  @Output() newCloseValue = new EventEmitter<string>();

  get detailsForClose() {
    return this.positionCreationService.detailsForEdit;
  }
  constructor(public dialog: MatDialog, private positionCreationService: PositionCreationService) { console.log(this.detailsForClose); }
  addNewItem(resultFromDialogClose) {
    this.newCloseValue.emit(resultFromDialogClose);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogCloseComponent, {
      width: '350px',
      direction: "ltr",
      data: {
        sum: this.detailsForClose.sum,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      this.addNewItem(result);
      console.log(`Dialog close result: ${result}`);
    });
  }
  ngOnDestroy() {
    this.positionCreationService.dataAfterClose = '';
  }
}
