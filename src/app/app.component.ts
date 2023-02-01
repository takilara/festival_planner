import { Component,ViewChild,ElementRef, OnInit, AfterViewInit, HostListener  } from '@angular/core';
import { Venue } from './data.models';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit {
  
  @ViewChild("venue") venue: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild("daycontainer") dayContainer: ElementRef<HTMLInputElement> = {} as ElementRef;
  
  getValue() {
    console.log(this.venue);
    console.log("running getValue");
    this.venue.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
  }

  constructor(private dataService: DataService) { 
  }
  venues:Venue[] = [];
  
  getVenues(): void {
    this.venues = this.dataService.getVenues();
  };

  title = 'Festival Planner';

  ngOnInit() {
    this.getVenues();
  }

  ngAfterViewInit(): void {
      console.log("container width",this.dayContainer.nativeElement.offsetWidth)
      this.dataService.canvasWidth = this.dayContainer.nativeElement.offsetWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    //console.log(window.innerWidth);
    this.dataService.canvasWidth = this.dayContainer.nativeElement.offsetWidth;
    console.log("Setting canvas with to: ", this.dayContainer.nativeElement.offsetWidth);
    console.log("New canvas width: ", this.dataService.canvasWidth);
  }

  days = [
    "Thursday","Friday",
    "Saturday"
  ];

  concerts = [
    {
      "time": "08:00",
      "duration": 60,
      "band": "Vreid",
      "venue": "Scandic"
    },
    {
      "time": "09:00",
      "duration": 90,
      "band": "Cor Scorpii",
      "venue": "upstairs"
    },
  ]

  bands = [
    "Vreid",
    "Cor Scorpii",
    "Mistur"
  ];
  
}
console.log("testing");

