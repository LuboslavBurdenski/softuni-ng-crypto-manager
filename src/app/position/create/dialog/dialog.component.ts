import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { PositionCreationService } from '../../position-creation.service';
import { MainComponent } from '../main/main.component';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnDestroy {
  get selectedCoin() {
    return this.positionCreationService.selectedCoin;
  }
  get currentUserBalance() {
    return this.auth.currentUser.balance;
  }
  formValue;
  constructor(
    private positionCreationService: PositionCreationService,
    private auth: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<MainComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  onSubmit(form) {
    let shares = Number(form.value.sum) / Number(form.value.entry);
    let id = this.selectedCoin.split('/')[0].toLowerCase();
    let symbol = this.selectedCoin.split('/')[1].toLowerCase();

    form.value.shares = shares;
    form.value.coinId = id;
    form.value.symbol = symbol;

    this.formValue = form.value;

    this.positionCreationService.createPosition(form.value).subscribe((res) => {
      timer(2000).subscribe((r) => { console.log(r); this.router.navigate(['position', 'list']); });
      console.log(res)
    }, (e) => { console.log(e); });
  }
  ngOnDestroy() {
    this.dialogRef.close(this.formValue);
  }


}

