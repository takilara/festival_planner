import { Injectable } from '@angular/core';
import { Band, Concert, Venue } from './data.models';
import { VENUES, BANDS, CONCERTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bands:Band[]=[];

  constructor() { }

  public getVenues():Venue[] {
    return VENUES;
  }

  public getBands():Band[] {
    this.bands = BANDS;
    return this.bands;
  }

  public getConcerts():Concert[] {
    return CONCERTS;
  }

  public getBand(bandId:string|undefined) {
    // force running of getBands first...
    this.getBands();
    console.log("Data Service asked to find band for ",bandId);
    var theBand = undefined;
    this.bands.forEach(b=>{
      if(b.id==bandId) {
        //return b;
        theBand=b;
      }
    });
    console.log("Data service found: ",theBand)
    return theBand;
  }
}
