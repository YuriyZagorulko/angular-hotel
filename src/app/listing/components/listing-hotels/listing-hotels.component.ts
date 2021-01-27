import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listing-hotels',
  templateUrl: './listing-hotels.component.html',
  styleUrls: ['./listing-hotels.component.scss']
})
export class ListingHotelsComponent implements OnInit {
  closeResult = '';
  isOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
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
}
