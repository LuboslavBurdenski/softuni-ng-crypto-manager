import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { ProfileService } from './profile.service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true,
  };
  public barChartColors = [{
    backgroundColor: []
  }];
  public barChartLabels = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'INCOME BY MONTH', },
  ];

  public pieChartLabels = ['No positions'];
  public pieChartData = [0];
  public pieChartType = 'pie';

  dataBarChart: Boolean = false;
  dataPieChart: Boolean = false;
  groupedResponse;
  constructor(private profileService: ProfileService) {
    this.groupedResponse = zip(this.profileService.barChartProfile(), this.profileService.pieChartProfile());
  }

  ngOnInit(): void {
    this.groupedResponse.subscribe(resp => {
      this.renderBarChart(resp[0]);
      this.renderPieChart(resp[1]);
    })
  }
  renderBarChart(resp: Array<any>) {
    resp.forEach((month: Object, i: Number) => {
      let monthIndex = Number(month['monthValue']) - 1;
      this.barChartData[0].data[monthIndex] = month['avgValue'];
    })
    this.barChartData[0].data.forEach((value, i) => {
      if (value > 0) {
        this.barChartColors[0].backgroundColor.push('#21CE99')
      } else {
        this.barChartColors[0].backgroundColor.push('hotpink');
      }
    });
    this.dataBarChart = true;
  }
  renderPieChart(resp: [String, any]) {
    if (resp.length > 0) {
      this.pieChartLabels = [];
      this.pieChartData = [];
    }
    for (let obj of resp) {
      let value: any[] = Object.entries(obj);
      this.pieChartLabels.push(value[0][0].toLocaleUpperCase());
      this.pieChartData.push(Number(value[0][1].toFixed(2)));
    }
    this.dataPieChart = true;
  }



}
