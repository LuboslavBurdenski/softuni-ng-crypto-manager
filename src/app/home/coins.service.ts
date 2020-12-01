import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(public http: HttpClient) { }
  loadCoins() {
    return this.http.get("http://localhost:3000/api/coins");
  }
}
