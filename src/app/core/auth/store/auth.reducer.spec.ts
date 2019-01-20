import { initialState, reducer } from './auth.reducer';

describe('AuthState Reducer', () => {
    it('should return the initial state', () => {
        const action = {} as any;

        const result = reducer(initialState, action);

        expect(result).toBe(initialState);
    });
});
