import { Component, OnInit, ElementRef, ViewChild, ViewChildren, ViewContainerRef, AfterViewInit, NgZone, OnDestroy, QueryList, Directive } from '@angular/core';
import { DataService } from '../data.service';
import { HourMarkerComponent } from '../hour-marker/hour-marker.component';

export interface HourMarkers {
  hour: number;
  height: number;
  width: number;
  top: number;
}

@Directive({selector: "marker"})
class ChildDirective {}

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})

export class TimeComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('hourColumn') elementView?: ElementRef;
  @ViewChild('marker1') hour1?: ElementRef;

  //@ViewChildren('comp', { read: ViewContainerRef });
  //public dynComponents?: QueryList<ViewContainerRef>;
  @ViewChildren(HourMarkerComponent) viewChildren!: QueryList<HourMarkerComponent>;

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
      // this.markers.forEach(marker=>{
      //   marker.height=spacing;
      // });
      // The above does not seem to work, maybe the markers are immutable

      // Alternatively. loop over hours, and use viewchild to get the markers
      console.log("Recalculate..")
      
      // for(let i = 0; i< firstAndLast.hours; i++)
      // {
      //   theHour = firstAndLast.firstHour+i;
      //   if(theHour>=24) { theHour = theHour - 24; }
      // }
      //console.log(this.dynComponents);
      console.log(this.viewChildren.length);
      console.log(this.viewChildren);

      // the below doesnt work, but "viewChildren" now actually contains the correct referances
      // this.viewChildren.forEach(c=> {
      //   let marker:HourMarkers = {
      //     "height":10,
      //     "top":10,
      //     "width": 10,
      //     "hour": 1
      //   }
      //   c.height=10;
      //   //c.marker=marker;
      // });
      //console.log(this.hour1);
    }

  }

  ngOnInit(): void {
    // Detect rescaling
    this.observer = new ResizeObserver(entries => {
      this.zone.run(() => {
        //this.width = entries[0].contentRect.width;
        //const height = entries[0].contentRect.height;
        //console.log(entries[0].contentRect, height);
        this.reCalculateScaling();
      });
    });
    this.observer.observe(this.host.nativeElement);
    //this.reCalculateScaling();
    
  }

  ngAfterViewInit() {
    // runs after rendering, might not be needed
    this.reCalculateScaling();

    console.log(this.viewChildren);
    


    console.log("Place hour entries at:");
    console.log(this.markers);

  }

  ngOnDestroy(): void {
    this.observer?.unobserve(this.host.nativeElement);
    this.observer?.disconnect();
  }

}
