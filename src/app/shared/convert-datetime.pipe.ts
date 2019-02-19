import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertDateTime'
})

export class ConvertDateTimePipe implements PipeTransform {
  transform(value: Date): string {
    let day = value.getDate().toString().padStart(2, '0');
    let month = (value.getMonth() + 1).toString().padStart(2, '0');
    let year = value.getFullYear().toString();
    let hour = value.getHours().toString().padStart(2, '0');
    let minutes = value.getMinutes().toString().padStart(2, '0');

    return day + '.' + month + '.' + year + ' ' + hour + ':' + minutes;
  }
}
