import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-widget',
  templateUrl: './calendar-widget.component.html',
  styleUrls: ['./calendar-widget.component.css']
})
export class CalendarWidgetComponent implements OnInit {
  @Output() dateChanged = new EventEmitter<string>();
  date: string;

  constructor() { }

  ngOnInit() {
  this.date = moment(new Date ()).format('YYYY-MM-DD');
  }

  onDateChange() {
    this.dateChanged.emit(this.date);
    console.log('changed to ' + this.date);
  }

}
