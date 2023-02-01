import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { VenueComponent } from './venue/venue.component';
import { TimeComponent } from './time/time.component';
import { ConcertComponent } from './concert/concert.component';
import { HourMarkerComponent } from './hour-marker/hour-marker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    VenueComponent,
    TimeComponent,
    ConcertComponent,
    HourMarkerComponent
    //MatDividerModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
