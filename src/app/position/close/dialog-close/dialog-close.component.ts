import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PositionCreationService } from '../../position-creation.service';
import { CloseMainComponent } from '../close-main/close-main.component';

@Component({
  selector: 'app-dialog-close',
  templateUrl: './dialog-close.component.html',
  styleUrls: ['./dialog-close.component.css']
})
export class DialogCloseComponent implements OnInit, OnDestroy {
  currentData;
  totalSum;
  closeFormValue;

  get closedData() {
    return this.positionCreationService.dataAfterClose;
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CloseMainComponent>,
    private positionCreationService: PositionCreationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentData = this.data;
    this.totalSum = this.currentData.sum;

    if (!this.closedData) {
      this.currentData = this.data;
    } else {
      this.currentData = this.closedData;
    }
  }

  onClose(closeForm) {
    this.closeFormValue = closeForm.value;
    this.positionCreationService.dataAfterClose = this.closeFormValue;
    this.positionCreationService
      .closePosition(this.router.url.split('/')[3], closeForm.value)
      .subscribe((resp) => { this.router.navigate(['history']) })
  }
  ngOnDestroy() {
    this.dialogRef.close(this.closeFormValue);
  }
}
