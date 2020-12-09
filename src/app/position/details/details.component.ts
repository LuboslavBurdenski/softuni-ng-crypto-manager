import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PositionCreationService } from '../position-creation.service';


export interface IDetails {
  name: string;
  value: number;
};


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnDestroy {
  displayedColumns;
  dataSource;
  DETAILS_DATA;
  avgPrice;
  shares;

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
          this.avgPrice = data['entry'];
          this.shares = data['shares'];
          this.DETAILS_DATA = [
            { name: 'Symbol', value: data['symbol'].toUpperCase() },
            { name: 'Coin', value: data['coinId'].toUpperCase() },
            { name: 'Current price', value: data['currentPrice'] },
            { name: 'Invested sum', value: data['sum'] },
            { name: 'Target profit', value: data['target'] },
            { name: 'Stop loss', value: data['stop'] },
            { name: 'Profit/loss', value: data['prfLoss'].toFixed(4) },
            { name: 'Profit/loss %', value: data['prfLossPerCent'].toFixed(4) },
            { name: '24h change %', value: data['changeIn24h'].toFixed(4) },
            { name: 'Date', value: data['created_at'].split('T')[0] },
          ];
          this.displayedColumns = ['name', 'value'];
          this.dataSource = this.DETAILS_DATA;
        })
      )
  }

  addEdit(newParams) {
    if (newParams !== undefined) {
      this.DETAILS_DATA[4].value = newParams.target;
      this.DETAILS_DATA[5].value = newParams.stop;
    }

  }
  addClose(newParams) {
    if (newParams !== undefined) {
      this.DETAILS_DATA[3].value = newParams.sum;
     
    }
  }
  ngOnDestroy(){
    this.positionCreationService.detailsForEdit = "";
  }



}
