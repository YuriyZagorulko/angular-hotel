import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {DaterangepickerDirective} from 'ngx-daterangepicker-material';
import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Moment} from 'moment';
import {NgbCalendar, NgbDate, NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';

type dateRange = {
  startDate: Moment,
  endDate: Moment
};
@Component({
  selector: 'app-hotel-params-header',
  templateUrl: './hotel-params-header.component.html',
  styleUrls: ['./hotel-params-header.component.scss']
})
export class HotelParamsHeaderComponent implements OnInit {

  @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
  isSearchVisible = false;
  reasonDefault = 'Select a Reason (optional)';
  reason = '';
  selectedDate: dateRange;
  minDate = moment();
  placeForm: FormGroup;
  rooms: [{ adults: number; children: number; ages: number; trackingId: number}];
  guestsNumber = 0;
  cities = [
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa',
  ];

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;
  constructor(private fb: FormBuilder,
              private calendar: NgbCalendar,
              private cdr: ChangeDetectorRef
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
    this.placeForm = this.fb.group({
      selectedCity: [null, Validators.required],
    });
    this.selectedDate = {
      startDate: moment(),
      endDate: moment().add(7, 'days')
    };
  }
  search(): void {
    console.log(this.selectedDate);
    console.log(this.reason);
    console.log(this.rooms);
    console.log(this.placeForm.value);
  }
  onRoomsChange(e): void{
    this.rooms = e;
    this.setNumberOfGuests();
    this.cdr.detectChanges();
  }
  setNumberOfGuests(): void{
    this.guestsNumber = 0;
    if (this.rooms){
      for (const room of this.rooms){
        this.guestsNumber += room.adults + room.children;
      }
    }
  }
  focusSearch(select, dropdown): void {
    dropdown.open();
    setTimeout(() => {
      if (dropdown.isOpen()) {
        select.focus();
        select.open();
      }
    });
  }

  onDateSelection(date: NgbDate, datepicker: NgbInputDatepicker): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    if (this.fromDate && this.toDate) {
      datepicker.toggle();
    }
  }

  isHovered(date: NgbDate): boolean {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate): boolean {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate): boolean {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
