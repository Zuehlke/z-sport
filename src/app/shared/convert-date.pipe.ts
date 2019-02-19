import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertDate'
})

export class ConvertDatePipe implements PipeTransform {
  transform(value: Date): string {
    let day = value.getDate().toString().padStart(2, '0');
    let month = (value.getMonth() + 1).toString().padStart(2, '0');
    let year = value.getFullYear().toString();
    return day + '.' + month + '.' + year;
  }
}
