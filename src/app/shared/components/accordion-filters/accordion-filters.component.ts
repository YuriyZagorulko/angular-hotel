import { Component, OnInit } from '@angular/core';
import {IHotel} from '../../../helpers/types/hotels';
import {hotelsList} from '../../../helpers/constants/hotels';
import {distance, popular, propertyType, starRating} from '../../../helpers/constants/filters';

@Component({
  selector: 'app-accordion-filters',
  templateUrl: './accordion-filters.component.html',
  styleUrls: ['./accordion-filters.component.scss']
})
export class AccordionFiltersComponent implements OnInit {

  priceMin = 0;
  priceMax = 35000;
  priceValue = 0;
  hotels: IHotel [] = hotelsList;
  popularFilters = popular;
  starFilters = starRating;
  distanceFilters = distance;
  typeFilters = propertyType;
  constructor() { }

  ngOnInit(): void {
  }

  logValue(): void{
    console.log(this.priceValue);
  }
}
