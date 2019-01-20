import { TestBed } from '@angular/core/testing';
import * as fromFeatureTwo from '@app/features/feature-two/store/feature-two.actions';
import { FeatureTwoFacade } from '@app/features/feature-two/store/feature-two.facade';
import { FeatureTwoState, reducer } from '@app/features/feature-two/store/feature-two.reducer';
import { reducers } from '@app/store/app.reducer';
import { combineReducers, Store, StoreModule } from '@ngrx/store';

describe('FeatureTwoFacade', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [FeatureTwoFacade],
        imports: [
            StoreModule.forRoot({
                ...reducers,
                FeatureOne: combineReducers(reducer)
            })
        ]
    }));

    it('should be created', () => {
        const service: FeatureTwoFacade = TestBed.get(FeatureTwoFacade);
        expect(service).toBeTruthy();
    });

    it('should dispatch an action', () => {
        const store: Store<FeatureTwoState> = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();

        const action = new fromFeatureTwo.ClearFeatureTwos();
        store.dispatch(action);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
