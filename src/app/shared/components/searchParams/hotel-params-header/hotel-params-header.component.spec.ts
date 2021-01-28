import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelParamsHeaderComponent } from './hotel-params-header.component';

describe('HotelParamsHeaderComponent', () => {
  let component: HotelParamsHeaderComponent;
  let fixture: ComponentFixture<HotelParamsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelParamsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelParamsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
