import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, Observable, observable } from 'rxjs';
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
export class ListComponent implements OnInit {
  positions: Observable<any>;
  data;
  filtered;
  emptyMatch: Boolean;


  constructor(private router: Router, private listPositions: PositionCreationService) {
    //this.listPositions.getAllPositions().subscribe((data) => {this.positions = data; console.log(data);});
    this.positions = this.listPositions.getAllPositions();
    console.log(this.positions);
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

  applyFilter(event: Event) {
    const sub = new Subject();

    sub.next(1);
    sub.subscribe(x => {
      console.log('Subscriber A', x);
    });
    sub.next(2); // OUTPUT => Subscriber A 2
    sub.subscribe(x => {
      console.log('Subscriber B', x);
    });
    sub.next(3);
    sub.subscribe(x => {
      console.log('Subscriber C', x);
    });
    sub.next(4);
    

  }

}
