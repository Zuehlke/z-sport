import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import {User} from '../../model/user';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'pm-events',
  templateUrl: './all-event-list.component.html',
  styleUrls: ['./all-event-list.component.css']
})

export class AllEventListComponent implements OnInit {

  user: User;
  pageTitle: String = 'Event List';
  subscriptions: Map<Number, boolean> = new Map<Number, boolean>();
  @Input() events: Event[] = [];

  constructor(private eventService: EventService, public snackBar: MatSnackBar, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(user => {
      this.user = user;
      if (user != null) {
        this.eventService.getAllEventsByUser(user.id).subscribe(
          events => this.updateSubscriptions(events));
      }
    });
  }

  updateSubscriptions(events: Event[]) {
    for (const temp of events) {
      this.subscriptions.set(temp.id, true);
    }
  }

  private subscribe($event) {
    if ($event.success) {
      this.subscriptions.set($event.eventId, true);
    } else {
      console.log(JSON.stringify($event.message));
    }
    this.openSnackBar($event.message, 'Dismiss');
  }

  private unsubscribe($event) {
    if ($event.success) {
      this.subscriptions.delete($event.eventId);
    } else {
      console.log(JSON.stringify($event.message));
    }
    this.openSnackBar($event.message, 'Dismiss');
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }
}

