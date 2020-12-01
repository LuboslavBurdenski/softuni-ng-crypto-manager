import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExcelService } from './excel.service';
import { UserService } from '../home/coins.service';
import { Router } from '@angular/router';


export interface PortfolioData {
  id: string,
  symbol: string,
  entry: string,
  current: number,
  sum: string,
  leverage: string,
  positionSize: string,
  prtLoss: number,
  prtLossPerCent: string,
  change: string
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['image', 'id', 'symbol', 'entry', 'current', 'sum', 'leverage', 'positionSize',
    'prtLoss', 'prtLossPerCent', 'change'];
  dataSource: MatTableDataSource<PortfolioData>;
  isClicked;
  portfolioData = [{
    id: '12', image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    symbol: 'BTC', entry: '10000', current: -11000, sum: '1000', leverage: '10', positionSize: '10000',
    prtLoss: 100, prtLossPerCent: '10', change: '50'
  },
  {
    id: '12', image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    symbol: 'BTC', entry: '10000', current: 11000, sum: '1000', leverage: '10', positionSize: '10000',
    prtLoss: 0, prtLossPerCent: '10', change: '50'
  },
  {
    id: '12', image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    symbol: 'ETH', entry: '10000', current: 11000, sum: '1000', leverage: '10', positionSize: '10000',
    prtLoss: -100, prtLossPerCent: '10', change: '50'
  },];


  constructor(private userService: UserService, private excelService: ExcelService,private router: Router) {
    this.dataSource = new MatTableDataSource(this.portfolioData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.portfolioData, 'sample');
  }
  

}

