//import { TestBed } from '@angular/core/testing';
//
//import { FirestoreService } from './firestore.service';
//
//describe('FirestoreService', () => {
//  beforeEach(() => TestBed.configureTestingModule({}));
//
//  it('should be created', () => {
//    const service: FirestoreService = TestBed.get(FirestoreService);
//    expect(service).toBeTruthy();
//  });
//});


import { TestBed, inject } from '@angular/core/testing';

import { FirestoreService } from './firestore.service';

describe('FirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreService]
    });
  });

  it('should be created', inject([FirestoreService], (service: FirestoreService) => {
    expect(service).toBeTruthy();
  }));
});