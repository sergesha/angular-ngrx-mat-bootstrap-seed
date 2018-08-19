import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureOneEffects } from './feature-one.effects';

describe('FeatureOneEffects', () => {
  let actions$: Observable<any>;
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
