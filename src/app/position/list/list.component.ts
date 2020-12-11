import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
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
  filteredPositions;
  emptyMatch;

  inputFilter = '';
  constructor(private router: Router, private listPositions: PositionCreationService) { }

  applyFilter(event) {
    console.log(this.positions);
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.inputFilter = filterValue;
    this.filteredPositions = this.positions.filter(coin => coin.symbol.includes(this.inputFilter));

    if (this.filteredPositions.length === 0) {
      this.emptyMatch = true;
    } else {
      this.emptyMatch = false
    }

  }
  ngOnInit() {
    this.listPositions.getAllPositions();
    this.listPositions.returnAsObservable()
      .subscribe((data) => {
        this.positions = data;
        this.filteredPositions = this.positions.filter(coin => coin.symbol.includes(this.inputFilter))
      });
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
