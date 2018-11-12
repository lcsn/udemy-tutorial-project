import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): string {
    if (!value || value.length < 2) {
      return value;
    }
    const array = value.split("");
    array.reverse();
    return array.join("");
  }

}
