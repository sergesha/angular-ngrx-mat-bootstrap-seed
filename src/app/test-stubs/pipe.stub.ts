import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'PipeStub' })
export class PipeStub implements PipeTransform {
    transform(value: number): number {
        // Do stuff here, if you want
        return value;
    }
}
