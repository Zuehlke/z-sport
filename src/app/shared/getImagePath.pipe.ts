import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getimagepath'
})

export class GetImagePathPipe implements PipeTransform {
  transform(value: string): string {
    return 'assets/icons/' + value.toLowerCase() + '.png';
  }
}
