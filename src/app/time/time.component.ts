import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';

export interface HourMarkers {
  hour: number;
  height: number;
  top: number;
}

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent implements AfterViewInit {
  @ViewChild('hourColumn') elementView?: ElementRef;

  contentHeight: number = -1;
  markers:HourMarkers[] = [];

  constructor(private dataService: DataService) { 
  }

  ngAfterViewInit() {
    this.contentHeight = this.elementView?.nativeElement.offsetHeight;
    console.log("Content Height: ",this.contentHeight);
    var firstAndLast = this.dataService.getFirstAndLastHourForAFestivalDay("1","2023-05-04"); // need to wrap this or something, maybe allow service to determine shown days
    var spacing = this.contentHeight/firstAndLast.hours;

    let theHour = firstAndLast.firstHour;
    for(let i = 0; i< firstAndLast.hours; i++)
    {
      theHour = firstAndLast.firstHour+i;
      if(theHour>=24) { theHour = theHour - 24; }
      this.markers.push(
        {
          "hour": theHour,
          "height": spacing,
          "top": spacing * i
        }
      );
    }

    console.log("Place hour entries at:");
    console.log(this.markers);

}

}
