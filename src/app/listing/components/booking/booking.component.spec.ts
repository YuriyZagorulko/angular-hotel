import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPageComponent } from './listing-hotels.component';

describe('ListingHotelsComponent', () => {
  let component: HotelPageComponent;
  let fixture: ComponentFixture<HotelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
