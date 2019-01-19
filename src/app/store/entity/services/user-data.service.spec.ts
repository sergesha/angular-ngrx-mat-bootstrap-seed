import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreStub } from '@app/test-stubs/angular-firestore.stub';

import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            UserDataService,
            { provide: AngularFirestore, useValue: AngularFirestoreStub }
        ]
    }));

    it('should be created', () => {
        const service: UserDataService = TestBed.get(UserDataService);
        expect(service).toBeTruthy();
    });
});
