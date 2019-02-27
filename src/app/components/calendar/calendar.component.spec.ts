import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import {CalendarWidgetComponent} from '../calendar-widget/calendar-widget.component';
import {MatInputModule, MatSelectModule, MatSidenavModule, MatSnackBar} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AllEventListComponent} from '../all-events/all-event-list.component';
import {ConvertTimePipe} from '../../shared/convert-time.pipe';
import {ConvertDatePipe} from '../../shared/convert-date.pipe';
import {ConvertDateTimePipe} from '../../shared/convert-datetime.pipe';
import {SubscriptionButtonComponent} from '../subscription-button/subscription-button.component';
import {AuthService} from '../../services/auth/auth.service';
import {CookieService} from 'ngx-cookie-service';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [ CalendarComponent,
        CalendarWidgetComponent,
        AllEventListComponent,
        SubscriptionButtonComponent,
        ConvertTimePipe,
        ConvertDatePipe,
        ConvertDateTimePipe],
      providers: [MatSnackBar, AuthService, CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
