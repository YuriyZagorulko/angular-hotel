import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSmallComponent } from './hotel-small.component';

describe('HotelSmallComponent', () => {
  let component: HotelSmallComponent;
  let fixture: ComponentFixture<HotelSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
