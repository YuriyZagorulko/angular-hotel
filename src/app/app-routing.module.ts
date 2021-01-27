import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './components/hotels/hotels.component';
import {MainLayoutComponent} from './components/layout/main-layout/main-layout.component';

const routes: Routes = [
  // Main layout
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'hotels'},
      { path: 'hotels', component: HotelsComponent },
    ],
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
