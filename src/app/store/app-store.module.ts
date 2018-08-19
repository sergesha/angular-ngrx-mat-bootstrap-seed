import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './app.reducer';
import { AppEffects } from './app.effects';

@NgModule( {
  imports: [
    CommonModule,
    StoreModule.forRoot( reducers, { metaReducers } ),
    EffectsModule.forRoot( [ AppEffects ] ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
} )
export class AppStoreModule {
}
