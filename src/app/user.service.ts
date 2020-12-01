import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  registerService(data){
    return this.http.post(`${baseURL}/users/register`, data);
  }
  loginUserService(data){
    return this.http.post(`${baseURL}/users/login`, data, {withCredentials: true});
  }
}
