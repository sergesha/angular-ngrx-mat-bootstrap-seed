import { inject, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreAdapterService } from '@app/core/services';
import { AngularFirestoreStub } from '@app/test-stubs/angular-firestore.stub';

describe('FirestoreAdapterService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FirestoreAdapterService,
                { provide: AngularFirestore, useValue: AngularFirestoreStub }
            ]
        });
    });

    it('should be created', inject([FirestoreAdapterService], (service: FirestoreAdapterService) => {
        expect(service).toBeTruthy();
    }));
});
