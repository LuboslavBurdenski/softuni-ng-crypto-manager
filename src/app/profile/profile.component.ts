import { Component, OnInit } from '@angular/core';
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
  public barChartData;

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4', 'Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90, 120, 150, 180, 90];
  public pieChartType = 'pie';
  dataHasValue: Boolean = false;

  constructor(private profileService: ProfileService) {
    this.barChartData = [
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'INCOME BY MONTH',  },
    ];
    this.profileService.userProfile().subscribe((resp: Array<any>) => {
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
      this.dataHasValue = true;
    })
  }

  ngOnInit(): void {
  }



}
