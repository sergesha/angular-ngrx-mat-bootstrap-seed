import { Injectable } from '@angular/core';
import * as fromAuth from '@app/core/auth/store/auth.actions';
import { authSelectors } from '@app/core/auth/store/auth.selectors';
import { AppState } from '@app/store/app.reducer';
import { select, Store } from '@ngrx/store';

type AppStates =
    | 'Auth'
    | 'FeatureOne'
    | 'FeatureTwo'
    | 'Hero';

@Injectable({
    providedIn: 'root'
})
export class AppStoreService {
    private fromState = {
        Auth: {
            isAuth$: this.store.pipe(select(authSelectors.isAuthenticated)),
            user$: this.store.pipe(select(authSelectors.userInfo)),
            googleLogin: () => this.store.dispatch(new fromAuth.GoogleLogin()),
            logout: () => this.store.dispatch(new fromAuth.Logout())
        },
        FeatureOne: {},
        FeatureTwo: {},
        Hero: {},
    };

    constructor(private store: Store<AppState>) {
    }

    from(state: AppStates): any {
        return this.fromState[state];
    }
}
