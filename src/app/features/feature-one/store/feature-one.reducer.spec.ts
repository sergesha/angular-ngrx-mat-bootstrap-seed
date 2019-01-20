import { initialState, reducer } from './feature-one.reducer';

describe('FeatureOne Reducer', () => {
    it('should return the initial state', () => {
        const action = {} as any;

        const result = reducer(initialState, action);

        expect(result).toBe(initialState);
    });
});
