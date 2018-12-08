import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth/auth.service';
import { Auth } from '@app/core/auth/store/auth.model';
import { FirestoreAdapterService } from '@app/core/services';
import { AppState } from '@app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromAuth from '@app/core/auth/store/auth.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular6-ngrx-mat-bootstrap-seed';
    showFiller = true;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    items: Observable<any[]>;
    itemsWithIds: Observable<any[]>;
    auth;
    auth$: Observable<Auth>;

    constructor(private breakpointObserver: BreakpointObserver,
                private authService: AuthService,
                private db: FirestoreAdapterService,
                private store: Store<AppState>) {
    }

    ngOnInit() {
        this.auth = this.authService;
        this.items = this.db.col$('users', ref => ref.where('displayName', '==', 'Serge S.'));
        this.items.subscribe(users => console.log('Users', users));
        this.itemsWithIds = this.db.colWithIds$('users');
        this.itemsWithIds.subscribe(users => console.log('WithIds', users));

        this.auth$ = this.store.select('auth');
        this.store.dispatch(new fromAuth.GetUser());
    }

    login() {
        // this.auth.googleLogin();
        this.store.dispatch(new fromAuth.GoogleLogin());
    }

    logout() {
        // this.auth.signOut();
        this.store.dispatch(new fromAuth.Logout());
    }
}
