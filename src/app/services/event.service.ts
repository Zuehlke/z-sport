import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Event} from '../model/event';
import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import {User} from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const eventUrl = '/api/v1/events';
const userUrl = '/api/v1/users';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  addEvent(event: Event) {
    return this.http.post(eventUrl, event, httpOptions);
  }

  applyForEvent(userId: number, event: Event) {
    console.log('called applyForEvent' + eventUrl + '/' + event.id + '/apply');
    const parameters = new HttpParams().set('userId', String(userId));
    return this.http.post(eventUrl + '/' + event.id + '/apply', {}, {params: parameters});
  }

  unsubscribeFromEvent(userId: number, event: Event) {
    console.log('called unsubscribeFromEvent' + eventUrl + '/' + event.id + '/apply');
    const parameters = new HttpParams().set('userId', String(userId));
    return this.http.post(eventUrl + '/' + event.id + '/unsubscribe', {}, {params: parameters});
  }

  getAllEventsByDate(date: string): Observable<Event[]> {
    const parameters = new HttpParams().set('date', date);
    return this.http.get<Event[]>(eventUrl, {params: parameters})
      .pipe(map(res => this.transformDates(res)));
  }

  getAllEventsBySport(sportId: number): Observable<Event[]> {
    const parameters = new HttpParams().set('sportId', String(sportId));
    return this.http.get<Event[]>(eventUrl, {params: parameters})
      .pipe(map(res => this.transformDates(res)));
  }

  getAllEventsByUser(userId: number): Observable<Event[]> {
    return this.http.get<Event[]>(userUrl + '/' + userId + '/events').
    pipe(map(res => this.transformDates(res)));
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(eventUrl).
    pipe(map(res => this.transformDates(res)));
  }

  getEvent(eventId: number) {
    return this.http.get<Event>(eventUrl + '/' + eventId).
    pipe(map(res => this.transformDate(res)));
  }

  transformDates(events: Event[]): Event[] {
    return events.map(event => {
      event.deadLine = new Date(event.deadLine);
    event.date = new Date(event.date);
    return event;
  });
  }

  transformDate(event: Event): Event {
    event.deadLine = new Date(event.deadLine);
    event.date = new Date(event.date);
    return event;
  }
}
