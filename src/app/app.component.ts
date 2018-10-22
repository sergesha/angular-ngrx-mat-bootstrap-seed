import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "@app/core/auth/auth.service";
import { FirestoreService } from "@app/core/services";
import { APP_HELPERS } from "@app/shared/helpers";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    constructor(private breakpointObserver: BreakpointObserver,
                protected auth: AuthService,
                private db: FirestoreService) {
    }

    ngOnInit() {
        this.items = this.db.col$('users');
        this.items.subscribe(users => console.log("Users", users));
        // this.items =this.db.col$('users', ref => ref.where('title', '==', 'Item 3'))
        this.itemsWithIds = this.db.colWithIds$('users');
        this.itemsWithIds.subscribe(users => console.log("WithIds", users));
    }

    login() {
        this.auth.googleLogin();
    }

    logout() {
        this.auth.signOut();
    }
}
