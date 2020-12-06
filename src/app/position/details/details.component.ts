import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PositionCreationService } from '../position-creation.service';


// export interface IDetails {
//   name: string;
//   value: number;
// };
// let DETAILS_DATA = [
//   { name: 'Symbol', value: 1 },
//   { name: 'Invested sum', value: 22 },
//   { name: 'Coin', value: 22 },
//   { name: 'Target profit', value: 22 },
//   { name: 'Stop loss', value: 22 },
//   { name: 'Profit/loss', value: 22 },
//   { name: 'Profit/loss %', value: 22 },
//   { name: '24h change', value: 22 },
//   { name: 'Created at', value: 22 },
// ];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  displayedColumns;
  dataSource;
  DETAILS_DATA;
  constructor(private positionCreationService: PositionCreationService, private router: Router) {
    this.detailsMaking().subscribe(data => this.positionCreationService.detailsForEdit = data);
  }

  detailsMaking() {
    return this.positionCreationService.getDetailForPosition(this.router.url.split('/')[3])
      .pipe(
        tap(data => {
          if (data['stop'] == 0) {
            data['stop'] = '-';
          }
          if (data['target'] == 0) {
            data['target'] = '-';
          }
          this.DETAILS_DATA = [
            { name: 'Symbol', value: data['symbol'].toUpperCase() },
            { name: 'Coin', value: data['coinId'].toUpperCase() },
            { name: 'Invested sum', value: data['sum'] },
            { name: 'Target profit', value: data['target'] },
            { name: 'Stop loss', value: data['stop'] },
            { name: 'Profit/loss', value: data['prfLoss'].toFixed(4) },
            { name: 'Profit/loss %', value: data['prfLossPerCent'].toFixed(4) },
            { name: '24h change %', value: data['changeIn24h'].toFixed(4) },
            { name: 'Created at', value: data['created_at'] },
          ];
          this.displayedColumns = ['name', 'value'];
          this.dataSource = this.DETAILS_DATA;
        })
      )
  }



}
