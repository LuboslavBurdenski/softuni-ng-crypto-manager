import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, Observable, observable, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
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
  positions: Observable<any>;
  inputFilter;
  constructor(private router: Router, private listPositions: PositionCreationService) {
    this.listPositions.getAllPositions();
    this.positions = this.listPositions.returnAsObservable()

  }
  applyFilter(event: String) {
    
  }
  ngOnInit() { }

  portfolioCardClickTradingView(symbol: String) {
    console.log(symbol);
    this.router.navigate(['position', 'chart', symbol.toUpperCase()])
  }
  portfolioCardClickDetails(symbol: String) {
    console.log(symbol);
    this.router.navigate(['position', 'details', symbol.toUpperCase()])
  }
 
  ngOnDestroy(): void {
    console.log('OUT');
    this.listPositions.stopExchangeUpdates();
  }
}
