import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseMainComponent } from './close-main.component';

describe('CloseMainComponent', () => {
  let component: CloseMainComponent;
  let fixture: ComponentFixture<CloseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
