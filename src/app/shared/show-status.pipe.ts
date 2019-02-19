import {Pipe, PipeTransform} from '@angular/core';
import {Event} from '../model/event';

@Pipe({
  name: 'showStatus'
})

export class ShowStatusPipe implements PipeTransform {
  transform(event: Event): string {
    if (new Date() < event.deadLine) {
      if (event.participants.length <= event.maxParticipants && event.participants.length >= event.minParticipants) {
        return 'OK';
      } else {
        return 'OPEN';
      }
    } else {
      if (event.participants.length <= event.maxParticipants && event.participants.length >= event.minParticipants) {
        return 'OK';
      } else {
        return 'CANCELLED';
      }
    }
  }
}
