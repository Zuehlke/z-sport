import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const sportUrl = '/api/v1/sports';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }

  getAllSports() {
    return this.http.get(sportUrl);
  }
}
