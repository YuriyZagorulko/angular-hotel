import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFullComponent } from './hotel-full.component';

describe('HotelFullComponent', () => {
  let component: HotelFullComponent;
  let fixture: ComponentFixture<HotelFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
