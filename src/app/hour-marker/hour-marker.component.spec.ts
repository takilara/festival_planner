import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourMarkerComponent } from './hour-marker.component';

describe('HourMarkerComponent', () => {
  let component: HourMarkerComponent;
  let fixture: ComponentFixture<HourMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourMarkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
