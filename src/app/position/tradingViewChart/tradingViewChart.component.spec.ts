import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingViewChartComponent } from './tradingViewChart.component';

describe('TradingViewChartComponent', () => {
  let component: TradingViewChartComponent;
  let fixture: ComponentFixture<TradingViewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingViewChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingViewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
