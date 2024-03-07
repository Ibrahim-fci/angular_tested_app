import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'texttTranform',
  standalone: true
})
export class TexttTranformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return value.toString().toUpperCase();

    }

    return null;
  }

}
