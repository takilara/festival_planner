import { Venue, Band, Concert, Festival } from './data.models';

export const VENUES: Venue[] = [
    { id: "1", name: 'Gassco'},
    { id: "2", name: 'Multi'},
    //{ id: "3", name: 'Vampire'},
    //{ id: "4", name: 'Scream'},
];

export const FESTIVALS: Festival[] = [
    { id: "1", name: "Karmøygeddon 2023", year: 2023, country:"Norway", firstdate:"2023-05-04", lastdate:"2023-05-06"}
];

export const BANDS: Band[] = [
    { id: "1", name: 'Vreid', genre:"Sognametall"},
    { id: "2", name: 'Cor Scorpii', genre:"Sognametall"},
    { id: "3", name: 'Mistur', genre:"Sognametall"},
    { id: "4", name: 'Kampfar', country: "Norway"},
    { id: "5", name: 'Slegest', genre:"Sognametall", country:"Norway"},
    { id: "6", name: 'Eluveitie'},
    { id: "7", name: 'Kamelot', genre:"Power metal"},
    { id: "8", name: 'Solstafir', genre:"Post metal", country: "Iceland"},
    { id: "9", name: 'Rotting Christ', genre: "Black metal"},
    { id: "10", name: 'Bloodred Hourglass', genre: "Melodic Death metal"},
    { id: "11", name: 'Bloodbound', genre:"Power metal"},
    { id: "12", name: 'Evig Natt', genre: "Gothic/Doom metal", country:"Norway"},
    { id: "13", name: 'Moist Bois'},
    { id: "14", name: 'Saor', genre: "Folk/Black metal", country:"Scotland"},
    { id: "15", name: 'Arkentype'},
    { id: "16", name: 'Hypermass'},
    { id: "17", name: 'Dirkschneider'},
    { id: "18", name: 'Pain'},
    { id: "19", name: 'Marduk', genre:"Black metal"},
    { id: "20", name: 'Batushka (Original)'},
    { id: "21", name: 'H.E.A.T'},
    { id: "22", name: 'Sakis'},
    { id: "23", name: 'Omnium Gatherum'},
    { id: "24", name: 'Vulgar Display of Cover'},
    { id: "25", name: 'Ved Buens Ende'},
    { id: "26", name: 'Nightfall'},
    { id: "27", name: 'Iotunn'},
    { id: "28", name: 'Sorcerer'},
    { id: "29", name: 'Ereb Altor'},
    { id: "30", name: 'Sinsid'},
    { id: "31", name: 'D.A.D'},
    { id: "32", name: 'Danko Jones'},
    { id: "33", name: 'Insomnium'},
    { id: "34", name: 'Moonsorrow'},
    { id: "35", name: 'Scar Symmetry'},
    { id: "36", name: 'Dreamshade'},
    { id: "37", name: 'Metalite'},
    { id: "38", name: 'Bon Scotch'},
    { id: "39", name: 'Wormwood'},
    { id: "40", name: 'Oceans'},
    { id: "41", name: 'Wolfheart'},
    { id: "42", name: 'Backstreet Girls'},
    { id: "43", name: 'Dold Vorde Ens Navn'},
    { id: "44", name: 'Ambush'}
];

export const FAVOURITEBANDS: string[] = [
    "1", "2", "3", "5", "6", "8","14"
]

export const FAVOURITECONCERTS: string[] = [
    "1","2","3","6","8","16"
]

export const CONCERTS: Concert[] = [
    //Thursday - Gassco
    { id: "1", festival_id:"1", band_id: "7", venue_id: "1", date:"2023-05-04", start_time: "23:30", duration: 60, day:"Thursday" },
    { id: "2", festival_id:"1", band_id: "8", venue_id: "1", date:"2023-05-04", start_time: "21:55", duration: 60, day:"Thursday" },
    { id: "3", festival_id:"1", band_id: "9", venue_id: "1", date:"2023-05-04", start_time: "20:25", duration: 60, day:"Thursday" },
    { id: "4", festival_id:"1", band_id: "10", venue_id: "1", date:"2023-05-04", start_time: "19:00", duration: 60, day:"Thursday" },
    { id: "5", festival_id:"1", band_id: "11", venue_id: "1", date:"2023-05-04", start_time: "17:45", duration: 60, day:"Thursday" },
    { id: "6", festival_id:"1", band_id: "12", venue_id: "1", date:"2023-05-04", start_time: "16:30", duration: 60, day:"Thursday" },
    //Thursday - Multi
    { id: "7", festival_id:"1", band_id: "13", venue_id: "2", date:"2023-05-05", start_time: "01:05", duration: 60, day:"Thursday" },
    { id: "8", festival_id:"1", band_id: "14", venue_id: "2", date:"2023-05-04", start_time: "23:00", duration: 60, day:"Thursday" },
    { id: "9", festival_id:"1", band_id: "15", venue_id: "2", date:"2023-05-04", start_time: "15:40", duration: 60, day:"Thursday" },
    { id: "10", festival_id:"1", band_id: "16", venue_id: "2", date:"2023-05-04", start_time: "14:35", duration: 60, day:"Thursday" },
    //Friday - Gassco
    { id: "11", festival_id:"1", band_id: "17", venue_id: "1", date:"2023-05-05", start_time: "23:40", duration: 60, day:"Friday" },
    { id: "12", festival_id:"1", band_id: "18", venue_id: "1", date:"2023-05-05", start_time: "22:00", duration: 60, day:"Friday" },
    { id: "13", festival_id:"1", band_id: "19", venue_id: "1", date:"2023-05-05", start_time: "20:30", duration: 60, day:"Friday" },
    { id: "14", festival_id:"1", band_id: "20", venue_id: "1", date:"2023-05-05", start_time: "19:05", duration: 60, day:"Friday" },
    { id: "15", festival_id:"1", band_id: "21", venue_id: "1", date:"2023-05-05", start_time: "17:50", duration: 60, day:"Friday" },
    { id: "16", festival_id:"1", band_id: "22", venue_id: "1", date:"2023-05-05", start_time: "16:35", duration: 60, day:"Friday" },
    { id: "17", festival_id:"1", band_id: "23", venue_id: "1", date:"2023-05-05", start_time: "15:25", duration: 60, day:"Friday" },
    //Friday - Multi
    { id: "18", festival_id:"1", band_id: "24", venue_id: "2", date:"2023-05-06", start_time: "01:00", duration: 60, day:"Friday" },
    { id: "19", festival_id:"1", band_id: "25", venue_id: "2", date:"2023-05-05", start_time: "23:10", duration: 60, day:"Friday" },
    { id: "20", festival_id:"1", band_id: "26", venue_id: "2", date:"2023-05-05", start_time: "21:30", duration: 60, day:"Friday" },
    { id: "21", festival_id:"1", band_id: "27", venue_id: "2", date:"2023-05-05", start_time: "18:40", duration: 60, day:"Friday" },
    { id: "22", festival_id:"1", band_id: "28", venue_id: "2", date:"2023-05-05", start_time: "14:15", duration: 60, day:"Friday" },
    { id: "23", festival_id:"1", band_id: "29", venue_id: "2", date:"2023-05-05", start_time: "13:10", duration: 45, day:"Friday" },
    { id: "24", festival_id:"1", band_id: "30", venue_id: "2", date:"2023-05-05", start_time: "12:15", duration: 45, day:"Friday" },
    //Saturday - Gassco
    { id: "25", festival_id:"1", band_id: "31", venue_id: "1", date:"2023-05-06", start_time: "23:30", duration: 60, day:"Saturday" },
    { id: "26", festival_id:"1", band_id: "32", venue_id: "1", date:"2023-05-06", start_time: "21:45", duration: 60, day:"Saturday" },
    { id: "27", festival_id:"1", band_id: "33", venue_id: "1", date:"2023-05-06", start_time: "20:15", duration: 60, day:"Saturday" },
    { id: "28", festival_id:"1", band_id: "34", venue_id: "1", date:"2023-05-06", start_time: "18:50", duration: 60, day:"Saturday" },
    { id: "29", festival_id:"1", band_id: "35", venue_id: "1", date:"2023-05-06", start_time: "17:25", duration: 60, day:"Saturday" },
    { id: "30", festival_id:"1", band_id: "36", venue_id: "1", date:"2023-05-06", start_time: "16:10", duration: 60, day:"Saturday" },
    { id: "31", festival_id:"1", band_id: "37", venue_id: "1", date:"2023-05-06", start_time: "15:10", duration: 45, day:"Saturday" },
    //Saturday - Multi
    { id: "32", festival_id:"1", band_id: "38", venue_id: "2", date:"2023-05-07", start_time: "01:10", duration: 60, day:"Saturday" },
    { id: "33", festival_id:"1", band_id: "39", venue_id: "2", date:"2023-05-06", start_time: "21:15", duration: 60, day:"Saturday" },
    { id: "34", festival_id:"1", band_id: "40", venue_id: "2", date:"2023-05-06", start_time: "18:30", duration: 60, day:"Saturday" },
    { id: "35", festival_id:"1", band_id: "41", venue_id: "2", date:"2023-05-06", start_time: "15:40", duration: 60, day:"Saturday" },
    { id: "36", festival_id:"1", band_id: "42", venue_id: "2", date:"2023-05-06", start_time: "14:25", duration: 60, day:"Saturday" },
    { id: "37", festival_id:"1", band_id: "43", venue_id: "2", date:"2023-05-06", start_time: "13:20", duration: 45, day:"Saturday" },
    { id: "38", festival_id:"1", band_id: "44", venue_id: "2", date:"2023-05-06", start_time: "12:20", duration: 45, day:"Saturday" }
];