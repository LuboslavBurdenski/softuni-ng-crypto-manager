import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProfileService } from './profile.service';
export interface IAverages {
  max: number;
  min: number;
  winRate: number;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public barChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Income",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
    },
  };
  public barChartColors = [{
    backgroundColor: []
  }];
  public barChartLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
  averages: IAverages;
  groupedResponse;

  constructor(private profileService: ProfileService) {
    this.groupedResponse = zip(this.profileService.barChartProfile(), this.profileService.pieChartProfile(), this.profileService.getAverages());
  }

  ngOnInit(): void {
    this.groupedResponse
      .pipe(take(1))
      .subscribe(resp => {
        this.renderBarChart(resp[0]);
        this.renderPieChart(resp[1]);
        this.renderAverages(resp[2]);
      });
  }
  renderBarChart(resp: Array<any>) {
    resp.forEach((month: Object, i: Number) => {
      let monthIndex = Number(month['monthValue']) - 1;
      this.barChartData[0].data[monthIndex] = month['sumValue'];
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

  renderAverages(resp: IAverages) {
    this.averages = resp;
  }
  
}

