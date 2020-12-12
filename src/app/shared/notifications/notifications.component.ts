import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  isThereSuccessEvent: Subject<boolean> = this.notifications.isSuccess;
  isThereErrorEvent: Subject<boolean> = this.notifications.isError;

  successMsg;
  errorMsg;

  constructor(private notifications: NotificationsService) {
    this.notifications.isSuccessMsg.subscribe((e) => { this.successMsg = e; })
    this.notifications.isErrorMsg.subscribe((e) =>{this.errorMsg = e;});
  }

  ngOnInit(): void {
  }

}
