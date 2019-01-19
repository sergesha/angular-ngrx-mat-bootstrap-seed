import { Injectable } from '@angular/core';
import { FeatureTwoState } from '@app/features/feature-two/store/feature-two.reducer';
import { Facade } from '@app/store/abstracts/facade';
import { Store } from '@ngrx/store';

@Injectable()
export class FeatureTwoFacade extends Facade<FeatureTwoState> {
    constructor(store: Store<FeatureTwoState>) {
        super(store);
    }
}
