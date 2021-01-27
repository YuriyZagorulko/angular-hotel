import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {IHotel} from '../../../../helpers/types/hotels';
import {hotelsList} from '../../../../helpers/constants/hotels';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss']
})
export class MapModalComponent implements OnInit{
  hotels: IHotel [] = hotelsList;
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit(): void {
  }
}
