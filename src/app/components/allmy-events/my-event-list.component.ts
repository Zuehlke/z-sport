import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import {User} from '../../model/user';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'my-events',
  templateUrl: './my-event-list.component.html',
  styleUrls: ['./my-event-list.component.css']
})

export class MyEventListComponent implements OnInit {

  user: User;
  pageTitle: String = 'Event List';
  events: Event[] = [];

  constructor(private eventService: EventService, public snackBar: MatSnackBar, private authService: AuthService) {this.events = []; }

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(user => {
      this.user = user;
      if (this.user != null) {
        this.afterUserExists();
      }
    });
  }

  afterUserExists(): void  {
    this.eventService.getAllEventsByUser(this.user.id).subscribe(events => {
      this.events = events;
    });
  }

  private getEvents(current: boolean): Event[] {
    const requestedEvents = [];
    for (const event of this.events) {
      if ((!current && (event.date < new Date())) || (current && (event.date >= new Date()))) {
        requestedEvents.push(event);
      }
    }
    return requestedEvents;
  }

  getCurrentEvents(): Event[] {
    return this.getEvents(true);
  }

  getPastEvents(): Event[] {
    return this.getEvents(false);
  }
}

