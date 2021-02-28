import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingHotelsComponent} from './components/listing-hotels/listing-hotels.component';
import {ListingLayoutComponent} from './components/layout/listing-layout/listing-layout.component';
import {HotelPageComponent} from './components/hotel-page/hotel-page.component';
import {BookingComponent} from './components/booking/booking.component';

const routes: Routes = [
  {
    path: '', component: ListingLayoutComponent,
    children: [
      {
        path: 'hotels',
        component: ListingHotelsComponent
      },
      {
        path: 'hotel/:id',
        component: HotelPageComponent
      },
      {
        path: 'booking',
        component: BookingComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
