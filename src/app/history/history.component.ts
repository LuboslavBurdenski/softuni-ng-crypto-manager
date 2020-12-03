import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PositionCreationService } from '../position/position-creation.service';
import { ExcelService } from './excel.service';



export interface HistoryData {
  id: string,
  symbol: string,
  entry: string,
  sum: number,
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

  displayedColumns: string[] = ['id', 'symbol', 'entry', 'sum', 'prtLoss', 'prtLossPerCent', 'change'];
  dataSource: MatTableDataSource<HistoryData>;
  isClicked;
  historyData = [{
    id: '12',symbol: 'BTC', entry: '10000',sum: 1000,  prtLoss: 100, prtLossPerCent: '10', change: '50'
  },
  {
    id: '12',symbol: 'BTC', entry: '10000', sum: 1000, prtLoss: 0, prtLossPerCent: '10', change: '50'
  }];


  constructor(private excelService: ExcelService, private positionService: PositionCreationService) {
    this.positionService.getHistory().pipe(
      map(data => data = data.positions),
      tap(historicPositions => this.historyData = historicPositions)
    )
      .subscribe(() => console.log(this.historyData));
    this.dataSource = new MatTableDataSource(this.historyData);
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
    this.excelService.exportAsExcelFile(this.historyData, 'sample');
  }



}

