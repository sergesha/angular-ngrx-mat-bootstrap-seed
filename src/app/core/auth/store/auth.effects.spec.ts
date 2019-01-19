import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireAuthStub } from '@app/test-stubs/angular-fire-auth.stub';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
    const actions$: Observable<any> = of('');
    let effects: AuthEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                AuthEffects,
                { provide: AngularFireAuth, useValue: AngularFireAuthStub },
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.get(AuthEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
