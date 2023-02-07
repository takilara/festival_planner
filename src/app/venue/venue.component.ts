import { AfterViewInit, Component,Input, OnInit, ViewChildren, QueryList, HostListener } from '@angular/core';
import { Band, Concert, Venue, BandConcerts } from '../data.models';
import { DataService } from '../data.service';
import { ConcertComponent } from '../concert/concert.component';

export interface ConcertElement {
  band: Band;
  concert: Concert;
  top: number;
  height: number;
  fav?:boolean;
};

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit, AfterViewInit{
  
  @Input("venueName") venueName?:Venue;
  @Input("dayOfWeek") dayOfWeek = "";
  //@Input("concerts") concerts = [];

  @ViewChildren(ConcertComponent) viewChildren!: QueryList<ConcertComponent>;

  //height?:number=200;
  top:number=Math.floor(Math.random() * (500 - 0 + 1) + 0)
  pixelsPrMinute:number = -1;

  test:string[] = [];
  myId:string="";

  venues:Venue[] = [];
  concerts:Concert[] = [];
  myConcerts:BandConcerts[] = [];

  concertElements:ConcertElement[]=[];

  bands:Band[] = [];

  getVenues(): void {
    this.venues = this.dataService.getVenues();
  };

  getBands(): void {
    this.bands = this.dataService.getBands();
  }

  getConcerts(): void {
    var concerts = this.dataService.getConcerts();
    this.pixelsPrMinute = this.dataService.pixelsPrMinute;
    
    
    concerts.forEach(c=>{
      //console.log("Id: ",v.id, "Name:",v.name);
      if(c.venue_id==this.venueName?.id && c.day==this.dayOfWeek) {
        console.log(this.venueName?.name + " will handle concert ",c);
        let band:Band = this.dataService.getBand(c.band_id)!;
        this.concerts.push(c);
        this.myConcerts.push({concert:c, band:band});
        let a = c.start_time!.split(":")
        let minutesFromFirst = (parseInt(a[0])-this.dataService.firstHour)*60+parseInt(a[1]);

        let elem:ConcertElement = {
            band:band, 
            concert:c, 
            height: c.duration*this.pixelsPrMinute,
            top: (minutesFromFirst*this.pixelsPrMinute) + this.dataService.firstHourAtPixel
        }
        if( this.dataService.getFavouriteConcerts("someuser").indexOf(c.id!)>-1) {
          elem.fav=true;
        }

        this.concertElements.push(elem);

      }
    });
  };


  recalculate() {
    let i = 0;
      this.viewChildren.forEach(c=> {
        this.pixelsPrMinute = this.dataService.pixelsPrMinute;
        let a = c.concert!.concert.start_time!.split(":")
        let minutesFromFirst = (parseInt(a[0])-this.dataService.firstHour)*60+parseInt(a[1]);
        let element = {
               "height":c.concert!.concert.duration*this.pixelsPrMinute,
               "top":(minutesFromFirst*this.pixelsPrMinute) + this.dataService.firstHourAtPixel
               //"width": this.contentWidth
             }
        c.rescale(element);
        //c.fav=true;
        if( this.dataService.getFavouriteConcerts("someuser").indexOf(c.concert!.concert!.id!)>-1) {
          c.fav=true;
          //c.concert!.fav=true;
        }
        i += 1;
      });
  }

  constructor(private dataService: DataService) { 
    this.test = ["a","b"];
  }

  ngOnInit() {
    this.myId = "venue-"+this.venueName?.name+"-"+this.dayOfWeek;
    console.log("Venue started up", this.myId);
    console.log("Populating venues...");
    this.getVenues();
    
    //console.log(this.venues);

    // loop through concerts, place them if they are in our venue, and our day of week
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.getConcerts(),500);
    //this.getConcerts();
    console.log("PixelsPrMinute",this.pixelsPrMinute);

  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    //console.log(window.innerWidth);
    this.recalculate();
  }



}

//console.log("Venue started up", this.venueName)
//console.log(this.test);
