import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureTwoEffects } from './feature-two.effects';

describe('FeatureTwoEffects', () => {
  let actions$: Observable<any>;
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
