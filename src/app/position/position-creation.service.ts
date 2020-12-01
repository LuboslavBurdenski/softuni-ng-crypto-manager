import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PositionCreationService {
  selectedCoin: String;
  constructor(public http: HttpClient) { }

  getAllPositions(){
    return 
  }
  createPosition(data) {
    return this.http.post('http://localhost:3000/api/position/create', data, {withCredentials: true});
  }
}
