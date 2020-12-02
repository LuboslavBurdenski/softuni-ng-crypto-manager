import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare const TradingView;
@Component({
  selector: 'app-tradingViewChart',
  templateUrl: './tradingViewChart.component.html',
  styleUrls: ['./tradingViewChart.component.css']
})
export class TradingViewChartComponent implements AfterViewInit {
  symbol: String;
  constructor(private route: ActivatedRoute) {
    this.symbol = `${this.route.snapshot.params.id}${'USD'}`
  }

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
