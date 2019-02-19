import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbar} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {ChildrenOutletContexts, Router, RouterOutlet} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        MatToolbar
      ],
      providers: [AuthService, CookieService, { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
