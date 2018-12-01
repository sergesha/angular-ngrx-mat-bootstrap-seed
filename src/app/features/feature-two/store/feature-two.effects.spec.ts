import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { FeatureTwoEffects } from './feature-two.effects';

describe('FeatureTwoEffects', () => {
    const actions$: Observable<any> = of('');
    let effects: FeatureTwoEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FeatureTwoEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(FeatureTwoEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
