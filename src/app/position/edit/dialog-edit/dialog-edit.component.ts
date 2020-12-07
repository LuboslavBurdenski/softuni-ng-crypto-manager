import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PositionCreationService } from '../../position-creation.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  currentData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private positionCreationService: PositionCreationService,
    private router: Router
  ) { this.currentData = this.data; }

  ngOnInit(): void { }

  onEdit(editForm) {
    console.log(editForm.value);
    this.positionCreationService.editPosition(this.router.url.split('/')[3], editForm.value).subscribe(resp => console.log(resp))
  }

}
