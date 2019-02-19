import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertTime'
})

export class ConvertTimePipe implements PipeTransform {
  transform(value: Date): string {
    let hours = value.getHours().toString().padStart(2, '0');
    let minutes = value.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
  }
}
