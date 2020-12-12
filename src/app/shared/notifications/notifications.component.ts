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
  successMsg;

  constructor(private notifications: NotificationsService) {
    this.notifications.isSuccessMsg.subscribe((e) => { this.successMsg = e; })
  }

  ngOnInit(): void {
  }

}
