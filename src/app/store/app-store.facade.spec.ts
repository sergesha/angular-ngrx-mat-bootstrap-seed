import { TestBed } from '@angular/core/testing';

import { AppStoreFacade } from './app-store.facade';

describe('AppStoreFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppStoreFacade = TestBed.get(AppStoreFacade);
    expect(service).toBeTruthy();
  });
});
