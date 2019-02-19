import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../user.service';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<User>(null);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get loggedInUser() {
    return this.user.asObservable();
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {
    if (this.cookieService.get('userId') != null) {
      this.login(Number(this.cookieService.get('userId')));
    }
  }

  login(userId: number) {
    this.loggedIn.next(true);
    this.userService.getUserById(userId).subscribe(user => {
      if (user != null) {
        this.user.next(user);
        this.cookieService.set('userId', String(userId));
        this.cookieService.set('isloggedIn', 'true');
        this.router.navigate(['/calendar']);
      } else {
        this.logout();
      }
    });
  }

  logout() {
    this.loggedIn.next(false);
    this.user.next(null);
    this.cookieService.deleteAll();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
