import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public isLoggedIn$: boolean;
  backgroundColor = environment.navBarBackgroundColor;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn$ = isLoggedIn);
  }

}
