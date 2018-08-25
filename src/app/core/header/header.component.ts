import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
} )
export class HeaderComponent {

    @Input() leftDrawer;
    @Input() rightDrawer;

    toggleLeftDrawer () {
        this.leftDrawer.toggle && this.leftDrawer.toggle();
    }

    toggleRightDrawer () {
        this.rightDrawer.toggle && this.rightDrawer.toggle();
    }
    // isHandset$: Observable<boolean> = this.breakpointObserver.observe( Breakpoints.Handset )
    //     .pipe(
    //         map( result => result.matches )
    //     );
    //
    // constructor( private breakpointObserver: BreakpointObserver ) {
    // }

}
