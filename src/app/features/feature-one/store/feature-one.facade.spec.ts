import { TestBed } from '@angular/core/testing';
import { FeatureOneFacade } from '@app/features/feature-one/store/feature-one.facade';
import { FeatureOneState, reducer } from '@app/features/feature-one/store/feature-one.reducer';
import { reducers } from '@app/store/app.reducer';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromFeatureOne from './feature-one.actions';

describe('FeatureOneFacade', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [FeatureOneFacade],
        imports: [
            StoreModule.forRoot({
                ...reducers,
                FeatureOne: combineReducers(reducer)
            })
        ]
    }));

    it('should be created', () => {
        const service: FeatureOneFacade = TestBed.get(FeatureOneFacade);
        expect(service).toBeTruthy();
    });

    it('should dispatch an action', () => {
        const store: Store<FeatureOneState> = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();

        const action = new fromFeatureOne.ClearFeatureOnes();
        store.dispatch(action);
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
