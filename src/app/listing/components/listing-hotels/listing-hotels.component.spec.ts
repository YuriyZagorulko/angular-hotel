import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingHotelsComponent } from './listing-hotels.component';

describe('ListingHotelsComponent', () => {
  let component: ListingHotelsComponent;
  let fixture: ComponentFixture<ListingHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
