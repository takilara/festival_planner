import { Venue, Band, Concert } from './data.models';

export const VENUES: Venue[] = [
    { id: "1", name: 'Scandic'},
    { id: "2", name: 'Upstairs'},
    { id: "3", name: 'Vampire'},
];

export const BANDS: Band[] = [
    { id: "1", name: 'Vreid'},
    { id: "2", name: 'Cor Scorpii'},
    { id: "3", name: 'Mistur'},
    { id: "4", name: 'Kampfar'},
    { id: "5", name: 'Slegest'},
    { id: "6", name: 'Eluveitie'}
];

export const CONCERTS: Concert[] = [
    { id: "1", band_id: "1", venue_id: "1", duration: 60, start_time: "17:30", day:"Friday" },
    { id: "2", band_id: "2", venue_id: "2", duration: 90, start_time: "18:00", day:"Friday"},
    { id: "3", band_id: "3", venue_id: "1", duration: 120, start_time: "18:30", day:"Friday"}
];