import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: string, defaultImagePath: string = 'assets/jihed.png'): string {
    return value.trim() ? defaultImagePath:value; 
  }
}
