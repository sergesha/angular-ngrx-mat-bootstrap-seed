import { Injectable } from '@angular/core';
import { AuthState } from '@app/core/auth/store/auth-state.model';
import * as fromAuth from '@app/core/auth/store/auth.actions';
import { authSelectors } from '@app/core/auth/store/auth.selectors';
import { Facade } from '@app/store/abstracts/facade';
import { select, Store } from '@ngrx/store';

@Injectable()
export class AuthFacade extends Facade<AuthState> {
    isAuth$ = this.store.pipe(select(authSelectors.isAuthenticated));
    user$ = this.store.pipe(select(authSelectors.userInfo));

    constructor(store: Store<AuthState>) {
        super(store);
    }

    googleLogin = () => this.store.dispatch(new fromAuth.GoogleLogin());
    logout = () => this.store.dispatch(new fromAuth.Logout());
}
