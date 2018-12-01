import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { FeatureOneEffects } from './feature-one.effects';

describe('FeatureOneEffects', () => {
    const actions$: Observable<any> = of('');
    let effects: FeatureOneEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FeatureOneEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(FeatureOneEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
