import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EventService} from '../../services/event.service';
import {Event} from '../../model/event';

export interface DialogData {
  sportId: number;
}

@Component({
  selector: 'app-sport-list-dialog',
  templateUrl: './sport-list.dialog.html',
})
export class SportListDialog implements OnInit {

  events: Event[];

  constructor(
    public dialogRef: MatDialogRef<SportListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eventService: EventService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.eventService.getAllEventsBySport(this.data.sportId).subscribe(
      (events: Event[]) => this.events = events
    );
  }

}
