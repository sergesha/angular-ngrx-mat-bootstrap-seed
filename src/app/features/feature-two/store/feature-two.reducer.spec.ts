import { initialState, reducer } from './feature-two.reducer';

describe('FeatureTwo Reducer', () => {
    it('should return the initial state', () => {
        const action = {} as any;

        const result = reducer(initialState, action);

        expect(result).toBe(initialState);
    });
});
