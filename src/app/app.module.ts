import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/layout/search/search.component';
import { HotelsParamsComponent } from './components/searchParams/hotels-params/hotels-params.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelsComponent,
    MainLayoutComponent,
    SearchComponent,
    HotelsParamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
