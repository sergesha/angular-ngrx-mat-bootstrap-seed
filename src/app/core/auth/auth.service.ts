import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@app/models/user.model';
import { auth } from 'firebase';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// interface User {
//     uid: string;
//     email: string;
//     photoURL?: string;
//     displayName?: string;
// }

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user$: Observable<User | null>;
    authState: any = null;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) {
        this.user$ = this.afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    // return fromPromise(auth().currentUser.getIdToken());
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );

        this.user$.subscribe((authState) => {
            this.authState = authState;
        });
    }

    // Returns true if user is logged in
    get authenticated(): boolean {
        return this.authState !== null;
    }

    // Returns current user data
    get currentUser(): any {
        return this.authenticated ? this.authState : null;
    }

    // Returns current user Observable
    get currentUser$(): any {
        return this.afAuth.authState;
    }

    // Returns current user UID
    get currentUserId(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    // Anonymous User
    get currentUserAnonymous(): boolean {
        return this.authenticated ? this.authState.isAnonymous : false;
    }

    // Returns current user display name or Guest
    get currentUserDisplayName(): string {
        if (!this.authState) {
            return 'Not authenticated';
        } else if (this.currentUserAnonymous) {
            return 'Anonymous';
        } else {
            return this.authState['displayName'] || 'User without a Name';
        }
    }

    ////// OAuth Methods /////
    googleLogin() {
        const provider = new auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
    }

    githubLogin() {
        const provider = new auth.GithubAuthProvider();
        return this.oAuthLogin(provider);
    }

    facebookLogin() {
        const provider = new auth.FacebookAuthProvider();
        return this.oAuthLogin(provider);
    }

    twitterLogin() {
        const provider = new auth.TwitterAuthProvider();
        return this.oAuthLogin(provider);
    }

    //// Anonymous Auth ////
    anonymousLogin() {
        return this.afAuth.auth
            .signInAnonymously()
            .then(credential => {
                return this.updateUserData(credential.user); // if using firestore
            })
            .catch(error => {
                this.handleError(error);
            });
    }

    //// Email/Password Auth ////
    emailSignUp(email: string, password: string) {
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(credential => {
                return this.updateUserData(credential.user); // if using firestore
            })
            .catch(error => this.handleError(error));
    }

    emailLogin(email: string, password: string) {
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(credential => {
                return this.updateUserData(credential.user);
            })
            .catch(error => this.handleError(error));
    }

    // Sends email allowing user to reset password
    resetPassword(email: string) {
        const fbAuth = auth();
        return fbAuth
            .sendPasswordResetEmail(email)
            .catch(error => this.handleError(error));
    }

    signOut() {
        this.afAuth.auth.signOut().then(() => {
            this.router.navigate(['/']);
        });
    }

    private oAuthLogin(provider: any) {
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(credential => {
                return this.updateUserData(credential.user);
            })
            .catch(error => this.handleError(error));
    }

    // If error, console log
    private handleError(error: Error) {
        console.error(error);
    }

    // Sets user data to firestore after successful login
    private updateUserData(user: User) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
            `users/${user.uid}`
        );

        const data: User = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || 'nameless user',
            photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
        };

        return userRef.set(data, { merge: true });
    }
}
