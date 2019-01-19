import { NgModule } from '@angular/core';
import { FeatureOneModule } from '@app/features/feature-one/feature-one.module';
import { FeatureTwoFacade } from '@app/features/feature-two/store/feature-two.facade';
import { HomeComponent } from '@app/features/home/home.component';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeatureTwoEffects } from './feature-two/store/feature-two.effects';
import * as fromFeatureTwo from './feature-two/store/feature-two.reducer';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [
        SharedModule,
        FeatureOneModule,
        StoreModule.forFeature('FeatureTwo', fromFeatureTwo.reducer),
        EffectsModule.forFeature([FeatureTwoEffects])
    ],
    declarations: [HomeComponent, UsersComponent],
    exports: [UsersComponent],
    providers: [FeatureTwoFacade]
})
export class FeaturesModule {
}
