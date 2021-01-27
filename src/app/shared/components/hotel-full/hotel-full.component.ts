import {Component, Input, OnInit} from '@angular/core';
import {IHotel} from '../../../helpers/types/hotels';

@Component({
  selector: 'app-hotel-full',
  templateUrl: './hotel-full.component.html',
  styleUrls: ['./hotel-full.component.scss']
})
export class HotelFullComponent implements OnInit {

  @Input() hotel: IHotel;
  constructor() { }

  ngOnInit(): void {
  }

}
