import { Component,Input, OnInit } from '@angular/core';
import { Band, Concert, Venue, BandConcerts } from '../data.models';
import { DataService } from '../data.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})



export class VenueComponent implements OnInit {
  
  @Input("venueName") venueName?:Venue;
  @Input("dayOfWeek") dayOfWeek = "";
  //@Input("concerts") concerts = [];

  test:string[] = [];
  myId:string="";

  venues:Venue[] = [];
  concerts:Concert[] = [];
  myConcerts:BandConcerts[] = [];
  bands:Band[] = [];

  getVenues(): void {
    this.venues = this.dataService.getVenues();
  };

  getBands(): void {
    this.bands = this.dataService.getBands();
  }

  getConcerts(): void {
    var concerts = this.dataService.getConcerts();
    concerts.forEach(c=>{
      //console.log("Id: ",v.id, "Name:",v.name);
      if(c.venue_id==this.venueName?.id && c.day==this.dayOfWeek) {
        console.log(this.venueName?.name + " will handle concert ",c);
        let band = this.dataService.getBand(c.band_id);
        this.concerts.push(c);
        this.myConcerts.push({concert:c, band:band});
      }
    });
  };


  constructor(private dataService: DataService) { 
    this.test = ["a","b"];
  }

  ngOnInit() {
    this.myId = "venue-"+this.venueName?.name+"-"+this.dayOfWeek;
    console.log("Venue started up", this.myId);
    console.log("Populating venues...");
    this.getVenues();
    this.getConcerts();
    //console.log(this.venues);

    // loop through concerts, place them if they are in our venue, and our day of week
  }

}

//console.log("Venue started up", this.venueName)
//console.log(this.test);
