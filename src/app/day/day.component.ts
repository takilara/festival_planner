import { Component, Input } from '@angular/core';
import { Venue } from '../data.models';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  //dayOfWeek = 'Friday';
  @Input("dayOfWeek") dayOfWeek = "";
  @Input("venues") venues:Venue[] = [];
  @Input("concerts") concerts=[];
  //venues = ["A","B"];
}
