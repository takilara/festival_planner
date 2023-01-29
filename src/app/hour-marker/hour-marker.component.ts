import { Component, Input } from '@angular/core';
import { HourMarkers } from '../time/time.component';

@Component({
  selector: 'app-hour-marker',
  templateUrl: './hour-marker.component.html',
  styleUrls: ['./hour-marker.component.scss']
})
export class HourMarkerComponent {
  @Input("marker") marker?:HourMarkers; 
}
