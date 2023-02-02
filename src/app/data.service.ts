import { Injectable } from '@angular/core';
import { Band, Concert, Venue } from './data.models';
import { VENUES, BANDS, CONCERTS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bands:Band[]=[];

  public canvasWidth:number = -1;
  public pixelsPrMinute:number = -1;
  public firstHour:number=-1;
  public firstHourAtPixel:number=-1;

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

  public getFirstAndLastHourForAFestivalDay(festival_id:string, date:string) {
    // return object that contains first and last hour for a date
    // Note, some concerts need to be shown on the day before
    // Harcoding this for now:
    var firstAndLastHour = {
      "firstHour": 12,
      "lastHour": 2,
      "hours":14
    }
    return firstAndLastHour;
  }

  

  public getBand(bandId:string|undefined):Band|undefined {
    // force running of getBands first...
    this.getBands();
    console.log("Data Service asked to find band for ",bandId);
    var theBand!:Band;
    this.bands.forEach(b=>{
      if(b.id==bandId) {
        //return b;
        theBand=b;
      }
    });
    if(theBand) {
      console.log("Data service found: ",theBand)
      return theBand;
    } else {
      return undefined;
    }
  }
}
