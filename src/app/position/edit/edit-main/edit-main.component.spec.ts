import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainComponent } from './edit-main.component';

describe('EditComponent', () => {
  let component: EditMainComponent;
  let fixture: ComponentFixture<EditMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
