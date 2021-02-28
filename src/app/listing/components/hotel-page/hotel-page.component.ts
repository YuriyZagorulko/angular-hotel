import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import SwiperCore, {
  Navigation,
} from 'swiper/core';
import {hotelRooms, reviews} from '../../../helpers/constants/hotel';
import {IHotelRoom, ISliderReview} from '../../../helpers/types/hotels';
import {BehaviorSubject} from 'rxjs';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.scss']
})
export class HotelPageComponent implements OnInit {
  reviews: ISliderReview [] = reviews;
  hotelRooms = hotelRooms;
  totalInfo = new BehaviorSubject<{rooms: number; price: number; additional: number}>(null)
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.totalInfo.next({
      additional: 0,
      price: 0,
      rooms: 0
    });
  }
  onSwiper(swiper): void {
    console.log(swiper);
  }
  onSlideChange(): void {
    console.log('slide change');
  }
  getRndColor(): string{
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  setQuantity(room: IHotelRoom, num: number): void {
    room.quantity.selected = num;
    this.updateTotalInfo();
  }
  updateTotalInfo(): void{
    const result = {
      additional: 0,
      price: 0,
      rooms: 0
    };
    for (const room of this.hotelRooms) {
      result.rooms += room.quantity.selected;
      result.price += room.price * room.quantity.selected;
      result.additional += room.additionalPrice * room.quantity.selected;
    }
    return this.totalInfo.next(result);
  }
}
