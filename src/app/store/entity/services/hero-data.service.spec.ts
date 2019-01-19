import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreStub } from '@app/test-stubs/angular-firestore.stub';

import { HeroDataService } from './hero-data.service';

describe('HeroDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            HeroDataService,
            { provide: AngularFirestore, useValue: AngularFirestoreStub }
        ]
    }));

    it('should be created', () => {
        const service: HeroDataService = TestBed.get(HeroDataService);
        expect(service).toBeTruthy();
    });
});
