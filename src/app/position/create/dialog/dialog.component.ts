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
  isEdit: Boolean;
  route: String[] = this.router.url.split('/');
 
  get selectedCoin() {
    return this.positionCreationService.selectedCoin;
  }

  constructor(
    private positionCreationService: PositionCreationService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    if (this.route[1] === 'position' && this.route[2] === 'details') {
      this.isEdit = true
    };
    console.log(this.data);
  }
  ngOnInit(): void {}
  onSubmit(form) {
    let shares = Number(form.value.sum) / Number(form.value.entry);
    let id = this.selectedCoin.split('/')[0].toLowerCase();
    let symbol = this.selectedCoin.split('/')[1].toLowerCase();

    form.value.shares = shares;
    form.value.coinId = id;
    form.value.symbol = symbol;
    console.log(form.value);

    this.positionCreationService.createPosition(form.value).subscribe((res) => {
      timer(2000).subscribe((r) => { console.log(r); this.router.navigate(['position', 'list']); });
      console.log(res)
    }, (e) => { console.log(e); });
  }
  onEdit(editForm) {
    console.log(editForm.value);
  }

}

