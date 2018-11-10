import { TestBed } from '@angular/core/testing';

import { FirestoreDataService } from './firestore-data.service';

describe('FirestoreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreDataService = TestBed.get(FirestoreDataService);
    expect(service).toBeTruthy();
  });
});
