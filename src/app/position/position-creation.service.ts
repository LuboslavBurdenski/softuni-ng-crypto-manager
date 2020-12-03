import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PositionCreationService {
  selectedCoin: String;
  constructor(public http: HttpClient) { }

  getAllPositions(): Observable<any>{
    return this.http.get('http://localhost:3000/api/position/list', {withCredentials: true});
  }
  createPosition(data): Observable<any> {
    return this.http.post('http://localhost:3000/api/position/create', data, {withCredentials: true});
  }
  getHistory(): Observable<any>{
    return this.http.get('http://localhost:3000/api/position/history', {withCredentials: true});
  }
}
