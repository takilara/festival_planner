import { Component, Input, OnInit } from '@angular/core';
import { Concert, Band, BandConcerts } from '../data.models';
import { DataService } from '../data.service';
import { ConcertElement } from '../venue/venue.component';


@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit{
  @Input("concert") concert?:ConcertElement;
  @Input("fav") fav?:boolean;
  //@Input("obj") obj?:ConcertElement;
//  @Input("band") band?:Band;
  

  checkFav(event: any) {
    console.log("checkval");
    console.log(event);
    this.fav = ! this.fav;
    this.dataService.setFavouriteConcert("someuser",this.concert?.concert.id!,this.fav);
  }

  //fav: boolean=false;
  band?:Band;
  height?:number=300;
  top:number=Math.floor(Math.random() * (500 - 0 + 1) + 0)

  rescale(element:any) {
    console.log("Rescale")
    this.concert!.height=element.height;
    this.concert!.top=element.top;
    // this.marker.height = marker.height;
    // this.marker.width = marker.width;
    // this.marker.top = marker.top;
    // this.marker.lineTop = marker.lineTop;
    // this.marker.lineWidth = marker.lineWidth;
  }

  ngOnInit() {
    console.log("Placing a concert using band_id",this.concert?.concert.band_id);
    this.band = this.dataService.getBand(this.concert?.concert.band_id);
    this.height = this.concert?.concert.duration; // TODO: dataService.getConcertHeight()
    this.top = Math.floor(Math.random() * (500 - 0 + 1) + 0) // dataService.getConcertStart()
    //console.log("Received the following band: ", this.concert?.band);
    console.log("Received the following band from data service ", this.band);


  }

  constructor(private dataService: DataService) { 
  }


}
