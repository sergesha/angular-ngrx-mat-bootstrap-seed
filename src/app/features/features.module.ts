import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFeatureOne from './feature-one/store/feature-one.reducer';
import * as fromFeatureTwo from './feature-two/store/feature-two.reducer';
import { FeatureOneEffects } from './feature-one/store/feature-one.effects';
import { FeatureTwoEffects } from './feature-two/store/feature-two.effects';

@NgModule( {
  imports: [
    CommonModule,
    StoreModule.forFeature( 'featureOne', fromFeatureOne.reducer ),
    StoreModule.forFeature( 'featureTwo', fromFeatureTwo.reducer ),
    EffectsModule.forFeature( [ FeatureOneEffects, FeatureTwoEffects ] )
  ],
  declarations: []
} )
export class FeaturesModule {
}
