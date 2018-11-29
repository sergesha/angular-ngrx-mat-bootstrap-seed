import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuesOf'
})
export class ValuesOfPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return typeof value === 'object' ? Object.values(value) : null;
  }

}
