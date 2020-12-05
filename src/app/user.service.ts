import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { PositionCreationService } from './position/position-creation.service';


const baseURL = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser;
  
  constructor(private http: HttpClient,private positionCreationService: PositionCreationService) { }
  registerService(data): Observable<any> {
    return this.http.post(`${baseURL}/users/register`, data, { withCredentials: true });
  }
  loginUserService(data): Observable<any> {
    return this.http.post(`${baseURL}/users/login`, data, { withCredentials: true });
  }
  getUserProfile(): Observable<any> {
    return this.http.get(`${baseURL}/users/profile`, { withCredentials: true })
      .pipe(
        tap(((user) => { this.currentUser = user })),
        catchError(() => { this.currentUser = null; return of(null); })
      );
  }
  logout(): Observable<any> {
    this.positionCreationService.subj = new BehaviorSubject([]);
    return this.http.get(`${baseURL}/users/logout`, { withCredentials: true }).pipe(
      tap(() => this.currentUser = null)
    );
  }
}
