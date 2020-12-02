import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { PositionCreationService } from '../../position-creation.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  get selectedCoin() {
    return this.positionCreationService.selectedCoin;
  }

  constructor(
    private positionCreationService: PositionCreationService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }
  ngOnInit() { }

  onSubmit(form) {
    let shares = Number(form.value.sum) / Number(form.value.entry);
    let id = this.selectedCoin.split('/')[0].toLowerCase();
    let symbol = this.selectedCoin.split('/')[1].toLowerCase();
    form.value.shares = shares;
    form.value.coinId = id;
    form.value.symbol = symbol;
    console.log(form.value);

    this.positionCreationService.createPosition(form.value).subscribe((res) => {
      timer(2000).subscribe(() => { this.router.navigate(['position', 'list']); });
      console.log(res)
    }, (e) => { console.log(e); });
  }

}

