import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FirestoreAdapterService } from '@app/core/services';
import { AppStoreFacade } from '@app/store/app-store.facade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-ngrx-mat-bootstrap-seed';
    showFiller = true;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    items: Observable<any[]>;
    itemsWithIds: Observable<any[]>;
    user$;

    constructor(private breakpointObserver: BreakpointObserver,
                private db: FirestoreAdapterService,
                private storeFacade: AppStoreFacade) {
    }

    ngOnInit() {
        this.items = this.db.col$('users', ref => ref.where('displayName', '==', 'Serge S.'));
        this.items.subscribe(users => console.log('Users', users));
        this.itemsWithIds = this.db.colWithIds$('users');
        this.itemsWithIds.subscribe(users => console.log('WithIds', users));

        this.user$ = this.storeFacade.from('Auth').user$;
    }

    login() {
        this.storeFacade.from('Auth').googleLogin();
    }

    logout() {
        this.storeFacade.from('Auth').logout();
    }
}
