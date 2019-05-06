import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const sportUrl = 'http://35.195.98.133/api/v1/sports';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) { }

  getAllSports() {
    return this.http.get(sportUrl);
  }
}
