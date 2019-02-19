import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../model/user';
import {Sport} from '../model/sport';

const userUrl = '/api/v1/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUserById(userId: number) {
    return this.http.get<User>(userUrl + '/' + userId);
  }

  subscribeSport(userId: number, sport: Sport) {
    const url = userUrl + '/' + userId + '/subscribe';
    // console.log('Send post to request to ' + url);
    const parameters = new HttpParams().set('sportId', String(sport.id));
    return this.http.post(url, {}, {params: parameters});
  }

  unsubscribeSport(userId: number, sport: Sport) {
    const url = userUrl + '/' + userId + '/unsubscribe';
    // console.log('Send post to request to ' + url);
    const parameters = new HttpParams().set('sportId', String(sport.id));
    return this.http.post(url, {}, {params: parameters});
  }

}
