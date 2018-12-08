import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import * as fromAuth from '@app/core/auth/store/auth.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';


@Injectable()
export class AuthEffects {
    @Effect()
    getUser: Observable<Action> = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.GET_USER),
        map((action: fromAuth.GetUser) => action.payload),
        switchMap(payload => of(this.authService.currentUser)),
        delay(2000), // delay to show loading spinner, delete me!
        map(authState => {
            if (authState) {
                /// User logged in
                // const user = new User(authState.uid, authState.displayName);
                return new fromAuth.Authenticated(authState);
            } else {
                /// User not logged in
                return new fromAuth.NotAuthenticated();
            }

        }),
        // TODO: ErrorHandler / handleError() - разобраться как использовать
        // catch(err =>  Observable.of(new AuthError()) )
    );
    @Effect()
    login: Observable<Action> = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.GOOGLE_LOGIN),
        map((action: fromAuth.GoogleLogin) => action.payload),
        switchMap(payload => {
            return this.authService.googleLogin();
            // return Observable.fromPromise(this.googleLogin());
        }),
        map(credential => {
            // successful login
            return new fromAuth.GetUser();
        }),
        // catch(err => {
        //     return Observable.of(new AuthError({error: err.message}));
        // })
    );
    @Effect()
    logout: Observable<Action> = this.actions$.pipe(
        ofType(fromAuth.AuthActionTypes.LOGOUT),
        map((action: fromAuth.Logout) => action.payload),
        switchMap(payload => {
            this.authService.signOut();
            return of(null);
        }),
        map(authData => {
            return new fromAuth.NotAuthenticated();
        })
        // .catch(err => Observable.of(new AuthError({error: err.message})) )
    );

    constructor(private actions$: Actions, private authService: AuthService) {
    }

    // private googleLogin(): firebase.Promise<any> {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     return this.afAuth.auth.signInWithPopup(provider);
    // }
}
