import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'moment';
import * as moment from 'moment';
import {DaterangepickerDirective} from 'ngx-daterangepicker-material';

type dateRange = {
  startDate: Moment,
  endDate: Moment
};
@Component({
  selector: 'app-hotels-params',
  templateUrl: './hotels-params.component.html',
  styleUrls: ['./hotels-params.component.scss']
})
export class HotelsParamsComponent implements OnInit {
  @ViewChild(DaterangepickerDirective, { static: false }) pickerDirective: DaterangepickerDirective;
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
  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) { }

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
  openDatepicker(): void {
    this.pickerDirective.open();
  }
  setReason(reason): void {
    console.log(reason);
    this.reason = reason;
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

}
