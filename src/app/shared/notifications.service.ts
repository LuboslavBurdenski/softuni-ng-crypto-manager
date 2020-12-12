import { Injectable } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor() { }
  isSuccess: Subject<boolean> = new Subject<boolean>();
  isSuccessMsg: Subject<any> = new Subject<any>();
 
  showSuccess(msg) {
    this.isSuccessMsg.next(msg);
    this.isSuccess.next(true);
    timer(3000).subscribe(() => this.isSuccess.next(false));
  }

}

