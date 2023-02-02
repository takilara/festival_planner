import { Component, OnInit, ElementRef, ViewChild, ViewChildren, ViewContainerRef, HostListener, AfterViewInit, NgZone, OnDestroy, QueryList, Directive } from '@angular/core';
import { DataService } from '../data.service';
import { HourMarkerComponent } from '../hour-marker/hour-marker.component';

export interface HourMarker {
  hour: number;
  height: number;
  width: number;
  top: number;
  lineTop: number;
  lineWidth: number;
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
  //@ViewChild('marker1') hour1?: ElementRef;
  @ViewChild('daycontainer') dayContainer: ElementRef<HTMLInputElement> = {} as ElementRef;

  //@ViewChildren('comp', { read: ViewContainerRef });
  //public dynComponents?: QueryList<ViewContainerRef>;
  @ViewChildren(HourMarkerComponent) viewChildren!: QueryList<HourMarkerComponent>;

  contentHeight:number = -1;
  contentWidth:number = -1;
  markers:HourMarker[] = [];
  //observer?:ResizeObserver;
  spacing:number=-1;
  lineWidth: number = -1;

  constructor(
    private dataService: DataService,
    private host: ElementRef, 
    private zone: NgZone
    ) {   }

  reCalculateScaling() {
    this.contentHeight = this.elementView?.nativeElement.offsetHeight;
    this.contentWidth = this.elementView?.nativeElement.offsetWidth;
    //this.lineWidth =  window.innerWidth - this.contentWidth - 10;
    this.lineWidth = this.dataService.canvasWidth - 10;
    //this.lineWidth =  this.dayContainer.nativeElement.offsetWidth - this.contentWidth - 10;
    if(this.lineWidth<0) {
      this.lineWidth = window.innerWidth;
    }
    console.log("Canvas Width:",this.dataService.canvasWidth);
    console.log("line width",this.lineWidth);
    //console.log(this.dayContainer);
    //console.log("Content Height: ",this.contentHeight);
    var firstAndLast = this.dataService.getFirstAndLastHourForAFestivalDay("1","2023-05-04"); // need to wrap this or something, maybe allow service to determine shown days
    this.spacing = this.contentHeight/firstAndLast.hours;
    let minutes=firstAndLast.hours*60;
    let pixelsPrMinute = this.contentHeight/minutes;
    console.log("Calculated pixel pr minute: ", pixelsPrMinute);
    this.dataService.pixelsPrMinute = pixelsPrMinute;
    this.dataService.firstHourAtPixel = this.spacing/2;

    let theHour = firstAndLast.firstHour;
    this.dataService.firstHour = theHour;
    //this.markers=[];
    if(this.markers.length==0) {
      for(let i = 0; i< firstAndLast.hours; i++)
      {
        theHour = firstAndLast.firstHour+i;
        if(theHour>=24) { theHour = theHour - 24; }
        this.markers.push(
          {
            "hour": theHour,
            "height": this.spacing,
            "width": this.contentWidth,
            "top": this.spacing * i,
            "lineTop": (this.spacing * i) + (this.spacing/2),
            "lineWidth": this.lineWidth
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
      //console.log("Recalculate..")
      
      // for(let i = 0; i< firstAndLast.hours; i++)
      // {
      //   theHour = firstAndLast.firstHour+i;
      //   if(theHour>=24) { theHour = theHour - 24; }
      // }
      //console.log(this.dynComponents);
      //console.log(this.viewChildren.length);
      //console.log(this.viewChildren);

      let i = 0;
      this.viewChildren.forEach(c=> {
        
        let marker:HourMarker = {
               "height":this.spacing,
               "top":this.spacing*i,
               "width": this.contentWidth,
               "hour": c.marker.hour,
               "lineTop": (this.spacing * i) + (this.spacing/2),
               "lineWidth": this.lineWidth
             }
        c.rescale(marker);
        i += 1;
      });


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
    // this.observer = new ResizeObserver(entries => {
    //   this.zone.run(() => {
    //     //this.width = entries[0].contentRect.width;
    //     //const height = entries[0].contentRect.height;
    //     //console.log(entries[0].contentRect, height);
    //     //this.reCalculateScaling();
    //   });
    // });
    // this.observer.observe(this.host.nativeElement);
    //this.reCalculateScaling();
    
  }


  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    //console.log(window.innerWidth);
    this.reCalculateScaling();
  }


  ngAfterViewInit() {
    // runs after rendering, might not be needed
    this.reCalculateScaling();

    console.log(this.viewChildren);
    console.log(this.dayContainer);
    


    console.log("Place hour entries at:");
    console.log(this.markers);

  }

  ngOnDestroy(): void {
    // this.observer?.unobserve(this.host.nativeElement);
    // this.observer?.disconnect();
  }

}
