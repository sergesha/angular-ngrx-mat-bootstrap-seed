import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FirestoreAdapterService } from '@app/core/services';
import { AppStoreService } from '@app/store/app-store.service';
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
                private storeService: AppStoreService) {
    }

    ngOnInit() {
        this.items = this.db.col$('users', ref => ref.where('displayName', '==', 'Serge S.'));
        this.items.subscribe(users => console.log('Users', users));
        this.itemsWithIds = this.db.colWithIds$('users');
        this.itemsWithIds.subscribe(users => console.log('WithIds', users));

        this.user$ = this.storeService.from('Auth').user$;
    }

    login() {
        this.storeService.from('Auth').googleLogin();
    }

    logout() {
        this.storeService.from('Auth').logout();
    }
}
