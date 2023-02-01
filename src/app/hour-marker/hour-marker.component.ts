import { Component, Input, NgZone, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { HourMarker } from '../time/time.component';



@Component({
  selector: 'app-hour-marker',
  templateUrl: './hour-marker.component.html',
  styleUrls: ['./hour-marker.component.scss']
})
export class HourMarkerComponent {
  
  @Input("marker") marker:HourMarker; 
  //@Input("height") height:number=-1;
  //@ViewChild('divider') divider?: ElementRef;

  @HostBinding('style.width') width: Number = -1;
  @HostBinding('style.height') height: Number = -1;

  rescale(marker:HourMarker) {
    //console.log("Do Something!!");
    //this.marker.height=height;
    this.marker.height = marker.height;
    this.marker.width = marker.width;
    this.marker.top = marker.top;
    this.marker.lineTop = marker.lineTop;
    this.marker.lineWidth = marker.lineWidth;
    //this.marker.height = marker.height;


    //this.height=10;
    //this.height = 10;
    // try {
    //   this.divider.nativeElement.style.width=200;
    // }
    // catch {}
    
    
  }

  constructor() {
    this.marker = {height:-1, top: -1, hour:-1, width: -1, lineTop: -1, lineWidth: -1};    
  }
}
