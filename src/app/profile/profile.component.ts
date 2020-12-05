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
    labels: 'Red',
  };

  public barChartLabels = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [20,20,20,20,20,20,20,20,20,20,20,20,], label: 'INCOME BY MONTH'},
  ];

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4', 'Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90, 120, 150, 180, 90];
  public pieChartType = 'pie';

  constructor(private profileService: ProfileService) {
    this.profileService.userProfile().subscribe(resp =>{ console.log(resp)});
  }

  ngOnInit(): void {
  }



}
