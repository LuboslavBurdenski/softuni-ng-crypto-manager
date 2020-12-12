import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { element } from 'protractor';
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
  dataReady: Boolean = false;
  currentPage;

  constructor(private excelService: ExcelService, private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getData(0, 10)
      .subscribe(data => {
        this.currentPage = data.positions;
        this.positions = data.positions;
        this.positions.length = data.total;
        this.dataSource = new MatTableDataSource(this.positions);
        console.log(this.positions);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 0);
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataReady = true;
    }, 0);
  }
  pageChanged(event) {
    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;
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

        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 0);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportAsXLSX(): void {
    let excelColumns = ['symbol', 'coinId', 'entry', 'sum', 'shares',
      'target', 'stop', 'prfLoss', 'prfLossPerCent', 'created_at'];
    console.log(this.currentPage);
    let renderedDataForExcel = [];
    this.currentPage.forEach(p => {
      let obj = {};
      for (let key in p) {
        if (excelColumns.includes(key)) {
          let newKey = key.toLocaleUpperCase();
          let newValueForDate;
          if (key === 'created_at') {
            newValueForDate = p[key].split('T')[0];
            obj[newKey] = newValueForDate;
          } else {
            obj[newKey] = p[key];
          }
        }
      }
      renderedDataForExcel.push(obj);
    });
    this.excelService.exportAsExcelFile(renderedDataForExcel, 'sample');
  }
}

