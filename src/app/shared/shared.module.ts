import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GuestsComponent} from './components/searchParams/guests/guests.component';
import {HotelsParamsComponent} from './components/searchParams/hotels-params/hotels-params.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HotelSmallComponent } from './components/hotel-small/hotel-small.component';
import { HotelFullComponent } from './components/hotel-full/hotel-full.component';
import {RatingModule} from 'ngx-bootstrap/rating';
import { HotelParamsHeaderComponent } from './components/searchParams/hotel-params-header/hotel-params-header.component';
import { CheckboxFilterComponent } from './components/checkbox-filter/checkbox-filter.component';
import { AccordionFiltersComponent } from './components/accordion-filters/accordion-filters.component';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    GuestsComponent,
    HotelsParamsComponent,
    HotelSmallComponent,
    HotelFullComponent,
    HotelParamsHeaderComponent,
    CheckboxFilterComponent,
    AccordionFiltersComponent
  ],
    imports: [
        CommonModule,
        NgSelectModule,
        ReactiveFormsModule,
        FormsModule,
        NgbDropdownModule,
        NgbModule,
        RatingModule,
        AccordionModule,
        RouterModule,
    ],
    exports: [
        HotelsParamsComponent,
        GuestsComponent,
        HotelSmallComponent,
        HotelParamsHeaderComponent,
        HotelFullComponent,
        CheckboxFilterComponent,
        AccordionFiltersComponent,
    ],
})
export class SharedModule { }
