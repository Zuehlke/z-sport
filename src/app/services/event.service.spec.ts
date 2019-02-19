import {async, TestBed} from '@angular/core/testing';

import { EventService } from './event.service';
import {HttpClientModule} from '@angular/common/http';
import {Event} from '../model/event';
import {Sport} from '../model/sport';
import {User} from '../model/user';
import {of} from 'rxjs';

describe('EventService', () => {
  let httpClientSpy: {get: jasmine.Spy };
  let eventService: EventService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    eventService = new EventService(<any> httpClientSpy);
    });


  it('should return all events with getAllEvents()', () => {
    const expectedEvents: Event[] =
    [{id: 1, date: new Date('2018-08-10'), location: 'testlocation', description: 'Beschreibung', minParticipants: 1,
      maxParticipants: 5, deadLine: new Date('2018-08-15'), duration: 2, sport: <Sport>{id: 10, name: 'Skiing'},
      user: <User>{email: 'test@yahoo.com'}, participants: []
    }];

    const fakeEvents: any[] =
      [{id: 1, date: '2018-08-10', location: 'testlocation', description: 'Beschreibung', minParticipants: 1,
        maxParticipants: 5, deadLine: '2018-08-15', duration: 2, sport: <Sport>{id: 10, name: 'Skiing'},
        user: <User>{email: 'test@yahoo.com'}, participants: []
      }];



    httpClientSpy.get.and.returnValue(of(fakeEvents));

    eventService.getAllEvents().subscribe(
      events => expect(events).toEqual(expectedEvents, 'expected events'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  });
});
