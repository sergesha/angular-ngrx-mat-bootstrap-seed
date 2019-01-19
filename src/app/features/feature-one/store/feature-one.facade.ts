import { Injectable } from '@angular/core';
import { FeatureOneState } from '@app/features/feature-one/store/feature-one.reducer';
import { Facade } from '@app/store/abstracts/facade';
import { Store } from '@ngrx/store';

@Injectable()
export class FeatureOneFacade extends Facade<FeatureOneState> {
    constructor(store: Store<FeatureOneState>) {
        super(store);
    }
}
