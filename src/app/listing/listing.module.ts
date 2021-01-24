import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHotelsComponent } from './components/listing-hotels/listing-hotels.component';
import {ListingRoutingModule} from './listing-routing.module';
import {ListingLayoutComponent} from './components/layout/listing-layout/listing-layout.component';



@NgModule({
  declarations: [
    ListingHotelsComponent,
    ListingLayoutComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule
  ]
})
export class ListingModule { }
