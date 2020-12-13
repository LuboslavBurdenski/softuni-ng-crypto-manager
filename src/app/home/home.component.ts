import { Component, OnDestroy, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { CoinService } from './coins.service';
import { PositionCreationService } from '../position/position-creation.service'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy, AfterViewInit {
  @ViewChild('all') result;

  data;
  filtered;

  emptyMatch: Boolean;
  selectedCoin;
  subscription;

  questions: string[] = ['You want to track your trades?', 'You want user-friendly design?', 'You want a real-time data portfolio of your positions?',
    'You are used to MS Excel and you want all of your data to be in that format?', 'If you match everything of the above check each line!'];

  constructor(private coinService: CoinService, private positionCreationService: PositionCreationService,
    private auth: AuthService, private router: Router) {
    this.subscription = this.coinService.loadCoins().subscribe(coins => { this.data = coins; this.filtered = coins; });

  }
  ngOnChanges(changes: SimpleChanges) {

  }
  get isThereSelectedCoin() {
    return !!this.positionCreationService.selectedCoin;
  }
  get isLogged(): boolean {
    return !!this.auth.currentUser;
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
  ngAfterViewInit() {
    this.result.selectionChange.subscribe(() => {
      if ([...this.result.selectedOptions._selection].length === 5) {
        this.router.navigate(['user', 'register'])
      }
    }
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
