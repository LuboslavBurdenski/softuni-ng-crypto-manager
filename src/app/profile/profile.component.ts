import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 1, rows: 3, color: 'lightblue' },
    { text: 'Two', cols: 3, rows: 4, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 1, rows: 2, color: '#DDBDF1' },
    { text: 'Five', cols: 1, rows: 2, color: 'lightblue' },
    { text: 'Six', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Seven', cols: 1, rows: 2, color: 'lightpink' },
    { text: 'Eight', cols: 2, rows: 2, color: '#DDBDF1' },
    { text: 'Nine', cols: 2, rows: 2, color: '#DDBDF1' },
  ];
  constructor(private profileService: ProfileService) {
    this.profileService.userProfile().subscribe(resp =>{ console.log(resp)});
  }

  ngOnInit(): void {
  }



}
