import { Component, Input, OnInit } from '@angular/core';
import { Concert, Band, BandConcerts } from '../data.models';
import { DataService } from '../data.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.scss']
})
export class ConcertComponent implements OnInit{
  @Input("concert") concert?:Concert;
//  @Input("band") band?:Band;

  band?:Band;
  height?:number=100;
  top:number=Math.floor(Math.random() * (500 - 0 + 1) + 0)

  ngOnInit() {
    console.log("Placing a concert using band_id",this.concert?.band_id);
    this.band = this.dataService.getBand(this.concert?.band_id);
    this.height = this.concert?.duration; // TODO: dataService.getConcertHeight()
    this.top = Math.floor(Math.random() * (500 - 0 + 1) + 0) // dataService.getConcertStart()
    //console.log("Received the following band: ", this.concert?.band);
    console.log("Received the following band from data service ", this.band);


  }

  constructor(private dataService: DataService) { 
  }


}
