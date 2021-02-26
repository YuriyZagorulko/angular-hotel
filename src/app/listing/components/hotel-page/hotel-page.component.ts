import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import SwiperCore, {
  Navigation,
} from 'swiper/core';
import {reviews} from '../../../helpers/constants/hotel';
import {ISliderReview} from '../../../helpers/types/hotels';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.scss']
})
export class HotelPageComponent implements OnInit {
  reviews: ISliderReview [] = reviews;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  getRndColor(): string{
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
