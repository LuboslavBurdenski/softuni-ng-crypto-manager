import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }

  userProfile() {
    return this.http.get('http://localhost:3000/api/position/statistics/month', {withCredentials: true});
  }
}
