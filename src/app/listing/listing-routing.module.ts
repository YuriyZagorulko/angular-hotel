import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingHotelsComponent} from './components/listing-hotels/listing-hotels.component';
import {ListingLayoutComponent} from './components/layout/listing-layout/listing-layout.component';

const routes: Routes = [
  {
    path: '', component: ListingLayoutComponent,
    children: [
      {
        path: 'hotels',
        component: ListingHotelsComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
