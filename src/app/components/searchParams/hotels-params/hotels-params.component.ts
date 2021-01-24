import {Component, OnInit, ViewChild} from '@angular/core';
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
  selectedDate: dateRange;
  minDate = moment();
  placeForm: FormGroup;
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
  constructor(private fb: FormBuilder) { }

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
  }
  openDatepicker(): void {
    this.pickerDirective.open();
  }

}
