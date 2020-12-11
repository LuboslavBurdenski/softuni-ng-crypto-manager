import { Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from './coins.service';
import { PositionCreationService } from '../position/position-creation.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  data;
  filtered;
  emptyMatch: Boolean;
  selectedCoin;
  subscription;
  constructor(private userService: UserService, private positionCreationService: PositionCreationService) {
    this.subscription = this.userService.loadCoins().subscribe(coins => { this.data = coins; this.filtered = coins; });
  }
  get isThereSelectedCoin() {
    return !!this.positionCreationService.selectedCoin;
  }
  addToPosition(e) {
    this.positionCreationService.selectedCoin = e.viewValue;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    let dataFiltered = this.data.filter(coin => coin.id.includes(filterValue));
    const noData = [{ id: 'There is no coin provided with that name' }];

    if (dataFiltered.length === 0) {
      dataFiltered = noData;
      this.emptyMatch = true;
    } else {
      this.emptyMatch = false
    }

    this.filtered = dataFiltered;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
