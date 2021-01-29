import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestsComponent} from './components/searchParams/guests/guests.component';
import {HotelsParamsComponent} from './components/searchParams/hotels-params/hotels-params.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotelSmallComponent } from './components/hotel-small/hotel-small.component';
import { HotelFullComponent } from './components/hotel-full/hotel-full.component';
import {RatingModule} from 'ngx-bootstrap/rating';
import { HotelParamsHeaderComponent } from './components/searchParams/hotel-params-header/hotel-params-header.component';



@NgModule({
  declarations: [
    GuestsComponent,
    HotelsParamsComponent,
    HotelSmallComponent,
    HotelFullComponent,
    HotelParamsHeaderComponent
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
    HotelParamsHeaderComponent,
  ],
})
export class SharedModule { }