import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, observable } from 'rxjs';
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
  positions;
  // dataSource = new MatTableDataSource(this.positions);

  constructor(private router: Router, private listPositions: PositionCreationService) {
    //this.listPositions.getAllPositions().subscribe((data) => {this.positions = data; console.log(data);});
    this.positions = this.listPositions.getAllPositions();
    console.log(this.positions);
  }

  ngOnInit() { }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  portfolioCardClickTradingView(symbol: String) {
    console.log(symbol);
    this.router.navigate(['position', 'chart', symbol.toUpperCase()])
  }
  portfolioCardClickDetails(symbol: String) {
    console.log(symbol);
    this.router.navigate(['position', 'details', symbol.toUpperCase()])
  }
  // getTotalCost() {
  //   return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }


}
