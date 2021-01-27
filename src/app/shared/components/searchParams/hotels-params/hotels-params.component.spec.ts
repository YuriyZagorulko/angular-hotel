import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsParamsComponent } from './hotels-params.component';

describe('HotelsParamsComponent', () => {
  let component: HotelsParamsComponent;
  let fixture: ComponentFixture<HotelsParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
