import {Component, Input, OnInit} from '@angular/core';
import {IHotel} from '../../../helpers/types/hotels';

@Component({
  selector: 'app-hotel-small',
  templateUrl: './hotel-small.component.html',
  styleUrls: ['./hotel-small.component.scss']
})
export class HotelSmallComponent implements OnInit {

  @Input() hotel: IHotel;
  constructor() { }

  ngOnInit(): void {
  }

}
