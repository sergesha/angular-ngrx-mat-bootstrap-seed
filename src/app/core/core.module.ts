import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { APP_CORE_SERVICES } from './services';
import { HeaderComponent } from './header/header.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { FooterComponent } from './footer/footer.component';

const APP_CORE_COMPONENTS = [
    HeaderComponent,
    LeftSidenavComponent,
    RightSidenavComponent,
    FooterComponent
];

@NgModule( {
    imports: [
        SharedModule
    ],
    declarations: [
        ...APP_CORE_COMPONENTS
    ],
    providers: [
        ...APP_CORE_SERVICES
    ],
    exports: [
        // AppRoutingModule,
        ...APP_CORE_COMPONENTS,
        ...APP_CORE_SERVICES
    ]
} )
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only' );
        }
    }
}
