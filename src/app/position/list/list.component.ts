import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { PositionCreationService } from '../position-creation.service';

export interface PortfolioData {
  id: string,
  symbol: string,
  entry: string,
  current: number,
  change: string
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  positions;
  inputFilter = '';
  constructor(private router: Router, private listPositions: PositionCreationService) { }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.inputFilter = filterValue;
  }
  ngOnInit() {
    this.listPositions.getAllPositions();
    this.listPositions.returnAsObservable()
      .pipe(
        map((coins: any) => {
          let newCoins = coins.filter(coin => coin.symbol.includes(this.inputFilter));
          return newCoins;
        }),
      )
      .subscribe((data) => { this.positions = data });
  }
  getListWithSSE() {

  }
  portfolioCardClickTradingView(symbol: String) {
    this.router.navigate(['position', 'chart', symbol.toUpperCase()])
  }
  portfolioCardClickDetails(symbol: String) {
    this.router.navigate(['position', 'details', symbol.toUpperCase()])
  }
  ngOnDestroy(): void {
    this.positions = [];
    this.listPositions.stopExchangeUpdates();
  }
}
