import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const TradingView;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  symbol: String;
  constructor(private route: ActivatedRoute) {
    this.symbol = `${this.route.snapshot.params.id}${'EUR'}`
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    new TradingView.widget(
      {
        "width": "100%",
        "height": 680,
        "symbol": `COINBASE:${this.symbol}`,
        "timezone": "EUROPE/BELGRADE",
        "theme": "Light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "range": "ytd",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "show_popup_button": true,
        "popup_width": "2000",
        "popup_height": "2000",
        "no_referral_id": true,

        "container_id": "tradingview_bac65"
      }
    );
  }

 

}
