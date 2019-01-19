import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { APP_CONFIG } from '@app/app-config';
import { FirebaseAuthService } from '@app/core/auth/services/firebase-auth.service';
import { AuthFacade } from '@app/core/auth/store/auth.facade';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/auth.effects';
import * as fromAuth from './store/auth.reducer';

@NgModule({
    declarations: [],
    imports: [
        AngularFireModule.initializeApp(APP_CONFIG.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        CommonModule,
        FormsModule,
        StoreModule.forFeature('Auth', fromAuth.reducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    providers: [
        FirebaseAuthService,
        AuthFacade
    ],
})
export class AuthModule {
}
