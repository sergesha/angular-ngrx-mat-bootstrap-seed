import { Store } from '@ngrx/store';

export abstract class Facade<T> {
    protected constructor(protected store: Store<T>) {
    }
}
