import { NgModule } from '@angular/core';
import { FeatureOneEffects } from '@app/features/feature-one/store/feature-one.effects';
import { FeatureOneFacade } from '@app/features/feature-one/store/feature-one.facade';
import * as fromFeatureOne from '@app/features/feature-one/store/feature-one.reducer';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        StoreModule.forFeature('FeatureOne', fromFeatureOne.reducer),
        EffectsModule.forFeature([FeatureOneEffects])
    ],
    providers: [FeatureOneFacade]
})
export class FeatureOneModule {
}
