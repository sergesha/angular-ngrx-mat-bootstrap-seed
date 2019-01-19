import { TestBed } from '@angular/core/testing';
import { FeatureTwoFacade } from '@app/features/feature-two/store/feature-two.facade';

describe('FeatureTwoFacade', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FeatureTwoFacade = TestBed.get(FeatureTwoFacade);
        expect(service).toBeTruthy();
    });
});
