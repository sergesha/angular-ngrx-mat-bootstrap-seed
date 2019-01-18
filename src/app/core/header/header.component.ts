import { Component, Input, OnInit } from '@angular/core';
import { AppStoreService } from '@app/store/app-store.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() leftDrawer;
    @Input() rightDrawer;
    isAuth$: Observable<boolean>;

    constructor(private storeService: AppStoreService) {
    }

    ngOnInit() {
        this.isAuth$ = this.storeService.from('Auth').isAuth$;
    }

    login() {
        this.storeService.from('Auth').googleLogin();
    }

    logout() {
        this.storeService.from('Auth').logout();
    }

    toggleLeftDrawer() {
        if (typeof this.leftDrawer.toggle === 'function') {
            this.leftDrawer.toggle();
        }
    }

    toggleRightDrawer() {
        if (typeof this.rightDrawer.toggle === 'function') {
            this.rightDrawer.toggle();
        }
    }

    // isHandset$: Observable<boolean> = this.breakpointObserver.observe( Breakpoints.Handset )
    //     .pipe(
    //         map( result => result.matches )
    //     );
    //
    // constructor( private breakpointObserver: BreakpointObserver ) {
    // }

}
