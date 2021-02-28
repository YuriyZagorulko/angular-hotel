import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import SwiperCore, {
  Navigation,
} from 'swiper/core';
import {hotelRooms, reviews} from '../../../helpers/constants/hotel';
import {IHotelRoom, ISliderReview} from '../../../helpers/types/hotels';
import {BehaviorSubject} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-booking-page',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm: FormGroup;
  constructor(public router: Router) {
    this.bookingForm = new FormGroup({
      firstName: new FormControl()
    });
  }

  ngOnInit(): void {
  }
}
