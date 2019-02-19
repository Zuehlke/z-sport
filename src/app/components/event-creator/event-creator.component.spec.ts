import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventCreatorComponent} from './event-creator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {By} from '@angular/platform-browser';
import {Button} from 'selenium-webdriver';

describe('EventCreatorComponent', () => {
  let component: EventCreatorComponent;
  let fixture: ComponentFixture<EventCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        HttpClientModule,
        MatSnackBarModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        MatCardModule,
        ReactiveFormsModule
      ],
      declarations: [EventCreatorComponent],
      providers: [AuthService, CookieService, {
        provide: Router, useClass: class {
          navigate = jasmine.createSpy('navigate');
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain all mandatory fields and submit button', () => {
    expect(component.form.contains('sport')).toBe(true);
    expect(component.form.contains('location')).toBe(true);
    expect(component.form.contains('date')).toBe(true);
    expect(component.form.contains('startTime')).toBe(true);
    expect(component.form.contains('duration')).toBe(true);
    const de = fixture.debugElement.query(By.css('button[type=submit]'));
    const el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('Submit');
  });

  it('should have disabled submit button by default', () => {
    expect(component.form.valid).toBe(false);
  });

});
