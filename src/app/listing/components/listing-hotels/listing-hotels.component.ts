import { Component, OnInit } from '@angular/core';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {IHotel} from '../../../helpers/types/hotels';
import {hotelsList} from '../../../helpers/constants/hotels';
import {distance, popular, propertyType, starRating} from '../../../helpers/constants/filters';


@Component({
  selector: 'app-listing-hotels',
  templateUrl: './listing-hotels.component.html',
  styleUrls: ['./listing-hotels.component.scss']
})
export class ListingHotelsComponent implements OnInit {

  priceMin = 0;
  priceMax = 35000;
  priceValue = 0;
  closeResult = '';
  hotels: IHotel [] = hotelsList;
  popularFilters = popular;
  starFilters = starRating;
  distanceFilters = distance;
  typeFilters = propertyType;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  logValue(): void{
    console.log(this.priceValue);
  }
}
