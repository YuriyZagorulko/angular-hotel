import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFiltersComponent } from './accordion-filters.component';

describe('AccordionFiltersComponent', () => {
  let component: AccordionFiltersComponent;
  let fixture: ComponentFixture<AccordionFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
