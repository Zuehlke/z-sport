/*import {Component, OnInit} from '@angular/core';
import {Event} from '../../model/event';
import {EventService} from '../../services/event.service';
import {SportService} from '../../services/sport.service';
import {Sport} from '../../model/sport';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../../model/user';
import {AuthService} from '../../services/auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  providers: [EventService],
  styleUrls: ['./event-creator.component.css']
})
export class EventCreatorComponent implements OnInit {

  INTEGER_MAX_VALUE = 2147483647;

  form = new FormGroup({
    sport: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    startTime: new FormControl(null, Validators.required),
    location: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    duration: new FormControl('', Validators.required),
    minParticipants: new FormControl(null, [Validators.min(1), Validators.max(this.INTEGER_MAX_VALUE)]),
    maxParticipants: new FormControl(null, [Validators.min(1), Validators.max(this.INTEGER_MAX_VALUE)]),
    deadline: new FormControl(),
    deadlineTime: new FormControl(),
    description: new FormControl('', Validators.maxLength(500))
  });

  creator: User;

  sports: [Sport];


  constructor(private eventService: EventService, private sportService: SportService,
              public snackBar: MatSnackBar, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.loggedInUser.subscribe(creator => this.creator = creator);
    this.sportService.getAllSports()
      .subscribe((sportData: [Sport]) => this.sports = sportData);
  }

  onSubmit() {
    const newEvent: Event = new Event();
    newEvent.description = this.form.get('description').value;
    newEvent.location = this.form.get('location').value;
    newEvent.date = this.combineDateAndTime(this.form.get('date').value, this.form.get('startTime').value);
    newEvent.duration = this.form.get('duration').value;
    const minParticipants = this.form.get('minParticipants').value;
    console.log('minParticipants' + minParticipants);
    if (minParticipants === null || minParticipants === 0) {
      newEvent.minParticipants = 1;
    } else {
      newEvent.minParticipants = minParticipants;
    }
    const maxParticipants = this.form.get('maxParticipants').value;
    if (maxParticipants === null || maxParticipants === 0) {
      newEvent.maxParticipants = this.INTEGER_MAX_VALUE;
    } else {
      newEvent.maxParticipants = maxParticipants;
    }

    // calculate deadline
    const deadline = this.form.get('deadline').value;
    if (deadline == null) {
      // no deadline defined by user
      const fakeDeadline = new Date(newEvent.date);
      fakeDeadline.setHours(newEvent.date.getHours() - 1);
      newEvent.deadLine = fakeDeadline;
    } else {
      const deadlineTime = this.form.get('deadlineTime').value;
      if (deadlineTime == null) {
        newEvent.deadLine = this.combineDateAndTime(deadline, this.form.get('startTime').value);
        if (newEvent.deadLine < new Date()) {
          // deadline would be in the past => set to end of today
          newEvent.deadLine = new Date();
          newEvent.deadLine.setHours(23);
          newEvent.deadLine.setMinutes(59);
        }
      } else {
        newEvent.deadLine = this.combineDateAndTime(deadline, deadlineTime);
      }
    }

    newEvent.user = this.creator;
    newEvent.sport = this.form.get('sport').value;
    console.log('Create event form submitted: ' + JSON.stringify(newEvent));
    this.eventService.addEvent(newEvent).subscribe(
      event => this.onSuccess(),
      error => this.onFailure(error));
  }

  private onSuccess() {
    this.openSnackBar('🎉🎉🎉 The event has been added!', 'Dismiss');
  }

  private onFailure(error: HttpErrorResponse) {
    console.log(JSON.stringify(error.statusText) + ': ' + error.error);
    this.openSnackBar('😞 Error: ' + error.error, 'Dismiss');
  }

  getCurrentDate(): Date {
    return new Date();
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  private combineDateAndTime(startDate: Date, startTime: String) {
    const splitTime = startTime.split(':');
    if (splitTime.length !== 2) {
      console.error('Invalid date and time');
      throw Error('Invalid date and time');
    }
    const hours = parseInt(splitTime[0]);
    const minutes = parseInt(splitTime[1]);
    startDate.setHours(hours);
    startDate.setMinutes(minutes);
    return startDate;
  }
  private isSameDate(firstDate: Date, secondDate: Date): boolean {
    if (firstDate != null && secondDate != null) {
      return (firstDate.getFullYear() === secondDate.getFullYear() &&
        firstDate.getMonth() === secondDate.getMonth() &&
        firstDate.getDay() === secondDate.getDay());
    }
    return false;
  }

  getEventDate() {
    return this.form.get('date').value;
  }

}*/
