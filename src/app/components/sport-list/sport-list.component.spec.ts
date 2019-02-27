import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportListComponent } from './sport-list.component';
import {MatCardModule, MatDialogModule, MatGridListModule, MatSnackBar} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {GetImagePathPipe} from '../../shared/getImagePath.pipe';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

describe('SportListComponent', () => {
  let component: SportListComponent;
  let fixture: ComponentFixture<SportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatGridListModule,
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [ SportListComponent, GetImagePathPipe ],
      providers: [
        AuthService,
        CookieService,
        MatSnackBar,
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
