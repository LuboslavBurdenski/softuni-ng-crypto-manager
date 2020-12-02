import { Component } from '@angular/core';

export interface IDetails {
  name: string;
  weight: number;
};
const DETAILS_DATA: IDetails[] = [
  { name: 'Symbol', weight: 1.0079},
  { name: 'Coin', weight: 4.0026},
  { name: 'Target profit', weight: 9.0122},
  { name: 'Stop loss', weight: 10.811},
  { name: 'Profit/loss', weight: 12.0107},
  { name: 'Profit/loss %', weight: 14.0067},
  { name: 'Change in last 24h', weight: 15.9994},
  { name: 'Notes', weight: 18.9984},
  { name: 'Created at', weight: 20.1797},
];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
 
  constructor() { }

  displayedColumns: string[] = [ 'name', 'weight'];
  dataSource = DETAILS_DATA;

}
