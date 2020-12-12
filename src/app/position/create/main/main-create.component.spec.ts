import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreateComponent } from './main-create.component';

describe('MainCreateComponent', () => {
  let component: MainCreateComponent;
  let fixture: ComponentFixture<MainCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
