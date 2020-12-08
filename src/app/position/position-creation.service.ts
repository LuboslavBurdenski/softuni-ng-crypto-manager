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

  public subj = new BehaviorSubject([]);

  constructor(public http: HttpClient) { }

  returnAsObservable() {
    return this.subj.asObservable();
  }
  createPosition(data): Observable<any> {
    return this.http.post('http://localhost:3000/api/position/create', data, { withCredentials: true });
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
        // console.log(JSON.parse(e.data));
      }
      this.evs.addEventListener("timestamp", function (e) {
        console.log("Timestamp event Received. Ready State is " + " " + this.readyState);
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
  getDetailForPosition(coin: String) {
    return this.http.get(`http://localhost:3000/api/position/details/${coin}`, { withCredentials: true });

  }
  editPosition(coin, data): Observable<any> {
    return this.http.put(`http://localhost:3000/api/position/edit/${coin}`, data, { withCredentials: true });
  }
  getHistory(): Observable<any> {
    return this.http.get('http://localhost:3000/api/position/history', { withCredentials: true });
  }

}
