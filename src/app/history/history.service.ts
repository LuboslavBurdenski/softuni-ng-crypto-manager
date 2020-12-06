import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) {}

  getData(offset, limit): Observable<any> {
    let params = new HttpParams();
    params = params.set('offset', offset);
    params = params.set('limit', limit);
    return this.http.get('http://localhost:3000/api/position/history?' + params.toString(), { withCredentials: true });
  }

  getNextData(offset, limit): Observable<any> {
    let params = new HttpParams();
    params = params.set('offset', offset);
    
    params = params.set('limit', limit);
    return this.http.get('http://localhost:3000/api/position/history?' + params.toString(),  { withCredentials: true });
  }
}
