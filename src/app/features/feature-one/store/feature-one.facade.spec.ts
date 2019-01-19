import { TestBed } from '@angular/core/testing';
import { FeatureOneFacade } from '@app/features/feature-one/store/feature-one.facade';

describe('FeatureOneFacade', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FeatureOneFacade = TestBed.get(FeatureOneFacade);
        expect(service).toBeTruthy();
    });
});
