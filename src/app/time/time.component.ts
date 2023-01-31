import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

export interface HourMarkers {
  hour: number;
  height: number;
  width: number;
  top: number;
}

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('hourColumn') elementView?: ElementRef;

  contentHeight:number = -1;
  contentWidth:number = -1;
  markers:HourMarkers[] = [];
  observer?:ResizeObserver;

  constructor(
    private dataService: DataService,
    private host: ElementRef, 
    private zone: NgZone
    ) {   }

  reCalculateScaling() {
    this.contentHeight = this.elementView?.nativeElement.offsetHeight;
    this.contentWidth = this.elementView?.nativeElement.offsetWidth;
    console.log("Content Height: ",this.contentHeight);
    var firstAndLast = this.dataService.getFirstAndLastHourForAFestivalDay("1","2023-05-04"); // need to wrap this or something, maybe allow service to determine shown days
    var spacing = this.contentHeight/firstAndLast.hours;

    let theHour = firstAndLast.firstHour;
    //this.markers=[];
    if(this.markers.length==0) {
      for(let i = 0; i< firstAndLast.hours; i++)
      {
        theHour = firstAndLast.firstHour+i;
        if(theHour>=24) { theHour = theHour - 24; }
        this.markers.push(
          {
            "hour": theHour,
            "height": spacing,
            "width": this.contentWidth,
            "top": spacing * i
          }
        );
      }
    } else {
      // We already have an array, loop it and update content?
      // Alternatively. loop over hours, and use viewchild to get the markers
    }

  }

  ngOnInit(): void {
    // Detect rescaling
    this.observer = new ResizeObserver(entries => {
      this.zone.run(() => {
        //this.width = entries[0].contentRect.width;
        const height = entries[0].contentRect.height;
        console.log(entries[0].contentRect, height);
      });
    });
    this.observer.observe(this.host.nativeElement);

    
  }

  ngAfterViewInit() {
    // runs after rendering, might not be needed
    this.reCalculateScaling();

    console.log("Place hour entries at:");
    console.log(this.markers);

  }

  ngOnDestroy(): void {
    this.observer?.unobserve(this.host.nativeElement);
  }

}
