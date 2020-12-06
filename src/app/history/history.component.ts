import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PositionCreationService } from '../position/position-creation.service';
import { ExcelService } from './excel.service';
import { HistoryService } from './history.service';

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
export class HistoryComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[];
  dataSource = new MatTableDataSource();
  positions;
  private currentPage;

  constructor(private excelService: ExcelService, private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getData(0, 1)
      .subscribe(data => {
        console.log(data);
        this.positions = data.positions;
        this.positions.length = data.total;
        this.dataSource = new MatTableDataSource(this.positions);
        this.dataSource.paginator = this.paginator;
      }
      );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  pageChanged(event) {
    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;
    let previousIndex = event.previousPageIndex;
    let previousSize = pageSize * pageIndex;

    this.historyService
      .getNextData((pageIndex).toString(), pageSize.toString())
      .subscribe((res: any) => {
        this.positions.length = previousSize;
        this.currentPage = res.positions;
        this.positions.push(...this.currentPage);
        this.positions.length = res.total;
        this.dataSource = new MatTableDataSource(this.positions);
        this.dataSource._updateChangeSubscription();
        this.dataSource.paginator = this.paginator;
      });

    console.log(pageIndex);
    console.log(previousIndex);
    console.log(previousSize);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.currentPage, 'sample');
  }



}

