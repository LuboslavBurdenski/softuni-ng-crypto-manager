import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  constructor(private http: HttpClient) { }
  barChartProfile() {
    return this.http.get('/users/statistics/month');
  }
  pieChartProfile(){
    return this.http.get('/users/statistics/segment');
  }
  getAverages(){
    return this.http.get('/users/statistics/averages');
  }

}
