import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeatureOneEffects } from './feature-one/store/feature-one.effects';
import * as fromFeatureOne from './feature-one/store/feature-one.reducer';
import { FeatureTwoEffects } from './feature-two/store/feature-two.effects';
import * as fromFeatureTwo from './feature-two/store/feature-two.reducer';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('featureOne', fromFeatureOne.reducer),
        StoreModule.forFeature('featureTwo', fromFeatureTwo.reducer),
        EffectsModule.forFeature([FeatureOneEffects, FeatureTwoEffects])
    ],
    declarations: [UsersComponent],
    exports: [UsersComponent],
    providers: []
})
export class FeaturesModule {
}
