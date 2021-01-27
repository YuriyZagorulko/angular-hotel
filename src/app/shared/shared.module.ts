import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestsComponent} from './components/searchParams/hotels-params/guests/guests.component';
import {HotelsParamsComponent} from './components/searchParams/hotels-params/hotels-params.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotelSmallComponent } from './components/hotel-small/hotel-small.component';
import { HotelFullComponent } from './components/hotel-full/hotel-full.component';
import {RatingModule} from 'ngx-bootstrap/rating';



@NgModule({
  declarations: [
    GuestsComponent,
    HotelsParamsComponent,
    HotelSmallComponent,
    HotelFullComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
    NgbDropdownModule,
    NgbModule,
    RatingModule,
  ],
  exports: [
    HotelsParamsComponent,
    GuestsComponent,
    HotelSmallComponent,
  ],
})
export class SharedModule { }
