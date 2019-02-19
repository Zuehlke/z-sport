import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AppComponent} from './app.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {CalendarComponent} from './components/calendar/calendar.component';
import {CalendarWidgetComponent} from './components/calendar-widget/calendar-widget.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventCreatorComponent } from './components/event-creator/event-creator.component';
import {EventService} from './services/event.service';
import {HttpClientModule} from '@angular/common/http';
import {SportService} from './services/sport.service';
import {MatNativeDateModule, MatSliderModule, MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AllEventListComponent} from './components/all-events/all-event-list.component';
import { SportListComponent } from './components/sport-list/sport-list.component';
import {SportListDialog} from './components/sport-list/sport-list.dialog';
import {ConvertTimePipe} from './shared/convert-time.pipe';
import {ConvertDatePipe} from './shared/convert-date.pipe';
import {MyEventListComponent} from './components/allmy-events/my-event-list.component';
import {MyEventTableComponent} from './components/allmy-events/event-table.component';
import {ShowStatusPipe} from './shared/show-status.pipe';
import {MatSelectModule} from '@angular/material/select';
import {GetImagePathPipe} from './shared/getImagePath.pipe';
import {ConvertDateTimePipe} from './shared/convert-datetime.pipe';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth/auth.service';
import {UserService} from './services/user.service';
import {EventDetailComponent} from './components/event-detail/event-detail.component';
import {MatSlideToggleModule} from '@angular/material/typings/esm5/slide-toggle';
import { SubscriptionButtonComponent } from './components/subscription-button/subscription-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CalendarComponent,
    CalendarWidgetComponent,
    EventCreatorComponent,
    AllEventListComponent,
    MyEventListComponent,
    MyEventTableComponent,
    SportListComponent,
    EventDetailComponent,
    LoginComponent,
    SportListDialog,
    ConvertTimePipe,
    ConvertDatePipe,
    ShowStatusPipe,
    GetImagePathPipe,
    ConvertDateTimePipe,
    SubscriptionButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSliderModule
  ],
  providers: [
    EventService,
    SportService,
    UserService,
    AuthService,
    CookieService
  ],
  entryComponents: [
    SportListDialog // Needed to load this component dynamically in SportListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
