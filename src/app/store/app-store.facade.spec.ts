import { TestBed } from '@angular/core/testing';
import { AuthFacade } from '@app/core/auth/store/auth.facade';
import { FeatureOneFacade } from '@app/features/feature-one/store/feature-one.facade';
import { FeatureTwoFacade } from '@app/features/feature-two/store/feature-two.facade';
import { reducers } from '@app/store/app.reducer';
import { StoreModule } from '@ngrx/store';

import { AppStoreFacade } from './app-store.facade';

describe('AppStoreFacade', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            AppStoreFacade,
            AuthFacade,
            FeatureOneFacade,
            FeatureTwoFacade
        ],
        imports: [
            StoreModule.forRoot({
                ...reducers,
            })
        ]
    }));
    it('should be created', () => {
        const service: AppStoreFacade = TestBed.get(AppStoreFacade);
        expect(service).toBeTruthy();
    });
});
