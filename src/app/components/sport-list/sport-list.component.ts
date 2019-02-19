import {Component, OnInit} from '@angular/core';
import {Sport} from '../../model/sport';
import {SportService} from '../../services/sport.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SportListDialog} from './sport-list.dialog';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent implements OnInit {

  subscribeBtnLabel = 'Subscribe';
  unsubscribeBtnLabel = 'Unsubscribe';
  sports: Sport[];
  user: User;

  constructor(private userService: UserService, private sportService: SportService, private authService: AuthService, private snackBar: MatSnackBar, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.sportService.getAllSports().subscribe(
      (sports: [Sport]) => this.sports = sports,
      error => console.log(error)
    );
    this.authService.loggedInUser.subscribe(user => {
      if (user == null) {
        console.log('user not authenticated... todo redirect to login page');
      } else {
        this.user = user;
        console.log('user authenticated... user data:');
        console.log(this.user);
      }
    });
  }

  onCardClick(sportId: number) {
    this.dialog.open(SportListDialog, {
      data: {sportId: sportId}
    });
  }

  toggleSubscription(sport: Sport, event, btn) {

    const userId = this.user.id;
    if (btn.innerText === this.subscribeBtnLabel) {
          console.log('Subscribe Sport <' + sport.id + '>: ' + sport.name);
          this.userService.subscribeSport(userId, sport).subscribe(
        next => {
          this.notifyUser('You will be notified as soon as new ' + sport.name + ' events are created.');
          btn.innerText = this.unsubscribeBtnLabel;
          this.user.subscribedSports.push(sport);
        },
        error => this.notifyUser('Subscribe ' + sport.name + 'failed.'));
    } else {
      console.log('Unsubscribe Sport <' + sport.id + '>: ' + sport.name);
      this.userService.unsubscribeSport(userId, sport).subscribe(
        next => {
          this.notifyUser('You will not receive further ' + sport.name + ' notifications.');
          btn.innerText = this.subscribeBtnLabel;
          this.user.subscribedSports = this.user.subscribedSports.filter(subscribedSport => subscribedSport.id !== sport.id);
        },
        error => this.notifyUser('Unsubscribe ' + sport.name + ' failed.'));
    }
    event.stopPropagation();
  }

  getInitialSubscribableLabel(sport: Sport) {
    let found = false;
    for (let i = 0; i < this.user.subscribedSports.length; i++) {
      if (this.user.subscribedSports[i].id === sport.id) {
        found = true;
        break;
      }
    }
    return found ? this.unsubscribeBtnLabel : this.subscribeBtnLabel;
  }

  private notifyUser(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 5000
    });
  }


}

