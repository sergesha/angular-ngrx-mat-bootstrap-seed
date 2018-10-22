import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgrxDataModule } from 'ngrx-data';
import { environment } from '../../environments/environment';
import { AppEffects } from './app.effects';
import { metaReducers, reducers } from './app.reducer';
import { entityConfig } from './entity-metadata';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([AppEffects]),
        NgrxDataModule.forRoot(entityConfig),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    declarations: []
})
export class AppStoreModule {
}
