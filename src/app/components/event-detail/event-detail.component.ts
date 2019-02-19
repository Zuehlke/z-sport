import {Component, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {
  INTEGER_MAX_VALUE = 2147483647;
  event: Event;
  user: User;
  errorMessage = '';

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService,
              private authService: AuthService, public snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.authService.loggedInUser.subscribe(user => {
      this.user = user;
    });
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getEvent(id);
    }
  }

  getEvent(id: number) {
    this.eventService.getEvent(id).subscribe(
      event => this.event = event,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/calendar']);
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  private handleSubscriptionUnsubscription($event) {
    if (!$event.success) {
      console.log(JSON.stringify($event.message));
    }
    this.openSnackBar($event.message, 'Dismiss');
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  getMaxParticipantsLabel(value: number) {
      return value === this.INTEGER_MAX_VALUE ? 'unrestricted' : value;
  }

}
