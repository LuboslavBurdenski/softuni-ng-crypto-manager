import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  constructor(private http: HttpClient) { }
  barChartProfile() {
    return this.http.get('http://localhost:3000/api/users/statistics/month', {withCredentials: true});
  }
  pieChartProfile(){
    return this.http.get('http://localhost:3000/api/users/statistics/segment', {withCredentials: true});
  }
  getAverages(){
    return this.http.get('http://localhost:3000/api/users/statistics/averages', {withCredentials: true});
  }

}
