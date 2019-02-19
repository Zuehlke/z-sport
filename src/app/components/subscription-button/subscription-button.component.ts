import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-subscription-button',
  templateUrl: './subscription-button.component.html',
  styleUrls: ['./subscription-button.component.css']
})
export class SubscriptionButtonComponent implements OnInit {

  @Input() event: Event;
  @Output() onSubscribe = new EventEmitter<{success: boolean, eventId: number, message: string}>();
  @Output() onUnsubscribe = new EventEmitter<{success: boolean, eventId: number, message: string}>();
  @Input() user: User;
  action: String;
  private subscriptionLabel: String;
  private unsubscriptionLabel: String;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.subscriptionLabel = 'Subscribe';
    this.unsubscriptionLabel = 'Unsubscribe';
    this.action = this.isUserSubscribed() ? this.unsubscriptionLabel : this.subscriptionLabel;
  }

  deadlinePassed(deadline: Date): boolean {
    return new Date() > deadline;
  }

  toggleEventSubscription(eventToSubscribe: Event) {
    if (this.isUserSubscribed()) {
      this.eventService.unsubscribeFromEvent(this.user.id, eventToSubscribe).subscribe(
        event => {
          this.onSubscribe.emit({success: true, eventId: eventToSubscribe.id, message: '🎉🎉🎉 Unsubscribed'});
          this.action = this.subscriptionLabel;
          this.event.participants = this.event.participants.filter(user => user.id !== this.user.id);
        },
        error => {
          this.onSubscribe.emit({success: false, eventId: eventToSubscribe.id, message: '😞 Error: ' + error.error});
        });
    } else {
      this.eventService.applyForEvent(this.user.id, eventToSubscribe).subscribe(
        event => {
          this.onUnsubscribe.emit({success: true, eventId: eventToSubscribe.id, message: '🎉🎉🎉 You\'re in!'});
          this.action = this.unsubscriptionLabel;
          this.event.participants.push(this.user);
        },
        error => {
          this.onUnsubscribe.emit({success: false, eventId: eventToSubscribe.id, message: '😞 Error: ' + error.error});
        });
    }
  }

  private isUserSubscribed(): boolean {
    return this.event != null && this.event.participants.filter(user => user.id === this.user.id).length !== 0;
  }

}
