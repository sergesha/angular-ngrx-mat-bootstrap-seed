import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@app/core/auth/auth.service';
// import { AuthRoutingModule } from './auth-routing.module';
// import { SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';

const firebaseConfig = {
  apiKey: 'AIzaSyB9IFI3rXXg678P1Tooirys7esWRT_8lig',
  authDomain: 'angular6-ngrx-mat-bootstrap.firebaseapp.com',
  databaseURL: 'https://angular6-ngrx-mat-bootstrap.firebaseio.com',
  projectId: 'angular6-ngrx-mat-bootstrap',
  storageBucket: 'angular6-ngrx-mat-bootstrap.appspot.com',
  messagingSenderId: '1096195674975'
};

@NgModule({
  declarations: [
    // SignupComponent,
    // SigninComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,

    CommonModule,
    FormsModule,
    // AuthRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
