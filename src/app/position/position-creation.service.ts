import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PositionCreationService {
  public selectedCoin: String;
  private evs: EventSource;
  public detailsForEdit;
  public dataAfterEditing = '';
  public dataAfterClose = '';

  public subj = new BehaviorSubject([]);

  constructor(public http: HttpClient) { }

  returnAsObservable() {
    return this.subj.asObservable();
  }
  getAllPositions() {
    let subject = this.subj;
    if (typeof (EventSource) !== undefined) {
      this.evs = new EventSource("http://localhost:3000/api/position/list", { withCredentials: true });

      this.evs.onopen = function (e) {
        console.log("Opening connection.Ready State is" + " " + this.readyState);
      }
      this.evs.onmessage = function (e) {
        // console.log('Message Received. Ready State is' + " " + this.readyState);
        subject.next(JSON.parse(e.data));
      }
      
      this.evs.addEventListener("timestamp", function (e) {
        console.log("Timestamp event Received. Ready State is " + " " + this.readyState);
        console.log(subject);
      })
      this.evs.onerror = function (e) {
        console.log(e);
        if (this.readyState == 0) {
          console.log('Reconnecting...');
        }
      }
    }
  }
  stopExchangeUpdates() {
    this.evs.close();
  }
  createPosition(data): Observable<any> {
    return this.http.post(`/position/create`, data);
  }
  getDetailForPosition(coin: String) {
    return this.http.get(`/position/details/${coin}`);

  }
  editPosition(coin, data): Observable<any> {
    return this.http.put(`/position/edit/${coin}`, data);
  }
  closePosition(coin, data) {
    return this.http.put(`/position/close/${coin}`, data);
  }
  getHistory(): Observable<any> {
    return this.http.get('/position/history');
  }

}
