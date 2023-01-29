export interface Concert {
    id?: string;
    band_id?: string;
    venue_id?: string;
    festival_id?: string;
    start_time?: string;
    duration: number;
    day: string; // What day to show it on
    date: string;
    //band_obj?:Band;
}

export interface Festival {
    id?: string;
    name: string;
    year: number;
    firstdate: string;
    lastdate: string;
    country: string;
}

export interface Band {
    id?:string;
    name: string;
}

export interface Venue {
    id?: string;
    name: string;
}

export interface BandConcerts {
    concert?: Concert;
    band?: Band;
  }