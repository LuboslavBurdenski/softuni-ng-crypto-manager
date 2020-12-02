import { Component } from '@angular/core';

export interface IDetails {
  name: string;
  value: number;
};
const DETAILS_DATA: IDetails[] = [
  { name: 'Symbol', value: 1.0079},
  { name: 'Coin', value: 4.0026},
  { name: 'Target profit', value: 9.0122},
  { name: 'Stop loss', value: 10.811},
  { name: 'Profit/loss', value: 12.0107},
  { name: 'Profit/loss %', value: 14.0067},
  { name: '24h change', value: 15.9994},
  { name: 'Notes', value: 18.9984},
  { name: 'Created at', value: 20.1797},
];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent{
 
  constructor() { }

  displayedColumns: string[] = [ 'name', 'value'];
  dataSource = DETAILS_DATA;

}
