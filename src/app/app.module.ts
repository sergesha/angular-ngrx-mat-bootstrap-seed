import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app-store.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';

import { AppComponent } from './app.component';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
    CoreModule,
    SharedModule,
    FeaturesModule
  ],
  providers: [],
  schemas: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
