import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CalendarComponent} from './components/calendar/calendar.component';
import {EventCreatorComponent} from './components/event-creator/event-creator.component';
import {SportListComponent} from './components/sport-list/sport-list.component';
import {MyEventListComponent} from './components/allmy-events/my-event-list.component';
import {LoginComponent} from './components/login/login.component';
import {EventDetailComponent} from './components/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'calendar/:id',
    component: MyEventListComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  /*{
    path: 'createEvent',
    component: EventCreatorComponent
  },*/
  {
    path: 'sports',
    component: SportListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'event/:id',
    component: EventDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
