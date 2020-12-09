import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { PositionCreationService } from '../../position-creation.service';
import { CloseMainComponent } from '../close-main/close-main.component';

@Component({
  selector: 'app-dialog-close',
  templateUrl: './dialog-close.component.html',
  styleUrls: ['./dialog-close.component.css']
})
export class DialogCloseComponent implements OnInit {

  currentData;
  closeFormValue;

  get closedData(){
    return this.positionCreationService.dataAfterClose;
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CloseMainComponent>,
    private positionCreationService: PositionCreationService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentData = this.data;
    console.log(this.closedData);
    if (!this.closedData) {
      this.currentData = this.data;
    } else {
      this.currentData = this.closedData;
    }
  }
  get userBalance(){
    return this.auth.currentUser.balance;
  }
  onClose(closeForm) {
    this.closeFormValue = closeForm.value;
    console.log( this.userBalance);
    this.closeFormValue.balance = this.userBalance;
    this.positionCreationService.dataAfterClose = this.closeFormValue;
    this.positionCreationService.closePosition(this.router.url.split('/')[3], closeForm.value).subscribe(resp => console.log(resp))
  }
  ngOnDestroy() {
    this.dialogRef.close(this.closeFormValue);
  }
}
