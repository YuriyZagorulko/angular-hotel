import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingHotelsComponent } from './components/listing-hotels/listing-hotels.component';
import {ListingRoutingModule} from './listing-routing.module';
import {ListingLayoutComponent} from './components/layout/listing-layout/listing-layout.component';
import { ListingHeaderComponent } from './components/layout/listing-header/listing-header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import { MapModalComponent } from './components/shared/map-modal/map-modal.component';
import {AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [
    ListingHotelsComponent,
    ListingLayoutComponent,
    ListingHeaderComponent,
    MapModalComponent
  ],
    imports: [
        CommonModule,
        ListingRoutingModule,
        NgbModule,
        SharedModule,
        AgmCoreModule
    ]
})
export class ListingModule { }
