export interface Concert {
    id?: string;
    band_id?: string;
    venue_id?: string;
    start_time?: string;
    duration: number;
    day: string;
    //band_obj?:Band;
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