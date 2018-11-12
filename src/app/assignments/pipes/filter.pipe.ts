import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // updating the filter when an object or array on the page is changed - may lead to performance issues
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = []
    for (const item of value) {
      if (item[propName].startsWith(filterString) ) {
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
