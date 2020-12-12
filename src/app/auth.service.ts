import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { PositionCreationService } from './position/position-creation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentBalance;
  currentUser;

  constructor(private http: HttpClient, private positionCreationService: PositionCreationService) { }
  registerService(data): Observable<any> {
    return this.http.post(`/users/register`, data);
  }
  loginUserService(data): Observable<any> {
    return this.http.post(`/users/login`, data);
  }
  getUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`)
      .pipe(
        tap(((user) => { this.currentUser = user; })),
        catchError(() => { this.currentUser = null; return of(null); })
      );
  }
  logout(): Observable<any> {
    this.positionCreationService.subj = new BehaviorSubject([]);
    this.currentBalance = 0;
    this.currentUser = {};
    return this.http.get(`/users/logout`).pipe(
      tap(() => this.currentUser = null)
    );
  }
}
