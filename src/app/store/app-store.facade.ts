import { Injectable } from '@angular/core';
import { AuthFacade } from '@app/core/auth/store/auth.facade';
import { FeatureOneFacade } from '@app/features/feature-one/store/feature-one.facade';
import { FeatureTwoFacade } from '@app/features/feature-two/store/feature-two.facade';
import { Facade } from '@app/store/abstracts/facade';
import { AppState } from '@app/store/app.reducer';
import { Store } from '@ngrx/store';

type AppStates =
    | 'App'
    | 'Auth'
    | 'FeatureOne'
    | 'FeatureTwo'
    | 'Hero';

@Injectable()
export class AppStoreFacade extends Facade<AppState> {
    private facadeFor = {
        App: {},
        Auth: this.authFacade,
        FeatureOne: this.featureOneFacade,
        FeatureTwo: this.featureTwoFacade,
        Hero: {},
    };

    constructor(store: Store<AppState>,
                private authFacade: AuthFacade,
                private featureOneFacade: FeatureOneFacade,
                private featureTwoFacade: FeatureTwoFacade) {
        super(store);
    }

    from(state: AppStates): any {
        return this.facadeFor[state];
    }
}
