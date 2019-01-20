import { TestBed } from '@angular/core/testing';
import { AuthState } from '@app/core/auth/store/auth-state.model';
import { reducer } from '@app/core/auth/store/auth.reducer';
import { reducers } from '@app/store/app.reducer';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromAuth from './auth.actions';

import { AuthFacade } from './auth.facade';

describe('AuthFacade', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [AuthFacade],
        imports: [
            StoreModule.forRoot({
                ...reducers,
                Auth: combineReducers(reducer)
            })
        ]
    }));

    it('should be created', () => {
        const service: AuthFacade = TestBed.get(AuthFacade);
        expect(service).toBeTruthy();
    });

    it('should dispatch an action via facade', () => {
        const service: AuthFacade = TestBed.get(AuthFacade);
        const store: Store<AuthState> = TestBed.get(Store);
        spyOn(store, 'dispatch').and.callThrough();
        const action = new fromAuth.Logout();
        service.logout();
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });
});
