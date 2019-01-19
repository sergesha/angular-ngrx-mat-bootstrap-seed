import { Component, Input, OnInit } from '@angular/core';
import { AppStoreFacade } from '@app/store/app-store.facade';
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

    constructor(private storeFacade: AppStoreFacade) {
    }

    ngOnInit() {
        this.isAuth$ = this.storeFacade.from('Auth').isAuth$;
    }

    login() {
        this.storeFacade.from('Auth').googleLogin();
    }

    logout() {
        this.storeFacade.from('Auth').logout();
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
