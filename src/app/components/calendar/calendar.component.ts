import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import * as moment from 'moment';
import {FormControl} from '@angular/forms';
import {Sport} from '../../model/sport';
import {SportService} from '../../services/sport.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  sportList: Sport[] = [];
  events: Event[];
  alLEvents: Event[] = [];
  currentDate: string;

  constructor(private route: ActivatedRoute,
              private eventService: EventService, private sportService: SportService) {
  }

  ngOnInit() {
    this.eventService.getAllEventsByDate(moment().format('YYYY-MM-DD'
    )).subscribe(
      (events: Event[]) => {
        this.alLEvents = events;
        this.events = events;
        this.currentDate = moment().format('YYYY-MM-DD');
        for (const event of events) {
          if (this.sportList.filter(e => e.name === event.sport.name).length === 0) {
            this.sportList.push(event.sport);
          }
        }
      }
    );
  }

  showSelectedEventsBySports(selectedSports: [Sport]) {
    this.eventService.getAllEventsByDate(this.currentDate)
      .subscribe(
        (events: Event[]) => this.alLEvents = events
      );
    if (selectedSports.length < 1 ) {
      this.events = this.alLEvents;
    } else {
      const tempEvents: Event[] = [];
      for (const tempEvent of this.alLEvents) {
        for (const tempSport of selectedSports) {
          console.log('Selected:' + tempSport.id);
          console.log('Aktual:' + tempEvent.sport.id);
          if (tempEvent.sport.id === tempSport.id) {
            tempEvents.push(tempEvent);
          }
        }
      }
      this.events = tempEvents;
    }

  }

  onDateChanged(date: string) {
    this.events = [];
    this.sportList = [];
    this.route.paramMap.subscribe(
      (params: Params) => this.eventService.getAllEventsByDate(date)
        .subscribe(events => {
          this.alLEvents = events;
          this.events = events;
          this.currentDate = date;
          for (const event of events) {
            if (this.sportList.filter(e => e.name === event.sport.name).length === 0) {
              this.sportList.push(event.sport);
            }
          }
        })
    );
  }
}
