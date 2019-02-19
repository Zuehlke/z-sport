import {Component, OnInit, Input} from '@angular/core';
import {Event} from '../../model/event';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./my-event-list.component.css']
})

export class MyEventTableComponent implements OnInit {

  @Input() events: Event[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
