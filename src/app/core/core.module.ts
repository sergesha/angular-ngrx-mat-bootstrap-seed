import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { APP_CORE_SERVICES } from './services';
import { HeaderComponent } from './header/header.component';

@NgModule( {
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderComponent
  ],
  providers: [
    ...APP_CORE_SERVICES
  ],
  exports: [
    ...APP_CORE_SERVICES,
    // AppRoutingModule,
    HeaderComponent
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
