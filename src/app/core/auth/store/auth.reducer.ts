import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { Auth } from './auth.model';

// export interface State extends EntityState<Auth> {
//     // additional entities state properties
//     loading?: boolean;
// }
// export const adapter: EntityAdapter<Auth> = createEntityAdapter<Auth>({
//     selectId: (auth: Auth) => auth.uid
// });
// export const initialState: State = adapter.getInitialState({
//     // additional entity state properties
//     uid: null,
//     // displayName: 'GUEST',
//     loading: false
// });

export const initialState: Auth = {
    uid: null,
    displayName: 'Unauthorized User',
    email: '',
    photoURL: '',
    loading: false,
    error: ''
};

export function reducer(
    state = initialState,
    action: AuthActions
): Auth {
    switch (action.type) {
        case AuthActionTypes.GET_USER: {
            return { ...state, loading: true };
        }

        case AuthActionTypes.AUTHENTICATED: {
            return { ...state, ...action.payload, loading: false };
        }

        case AuthActionTypes.NOT_AUTHENTICATED: {
            return { ...state, ...initialState, loading: false };
        }

        case AuthActionTypes.GOOGLE_LOGIN: {
            return { ...state, loading: true };
        }

        case AuthActionTypes.AUTH_ERROR: {
            return { ...state, ...action.payload, loading: false };
        }

        case AuthActionTypes.LOGOUT: {
            return { ...state, loading: true };
        }

// ----

        // case AuthActionTypes.AddFeatureOne: {
        //     return adapter.addOne(action.payload.featureOne, state);
        // }
        //
        // case AuthActionTypes.UpsertFeatureOne: {
        //     return adapter.upsertOne(action.payload.featureOne, state);
        // }
        //
        // case AuthActionTypes.AddFeatureOnes: {
        //     return adapter.addMany(action.payload.featureOnes, state);
        // }
        //
        // case AuthActionTypes.UpsertFeatureOnes: {
        //     return adapter.upsertMany(action.payload.featureOnes, state);
        // }
        //
        // case AuthActionTypes.UpdateFeatureOne: {
        //     return adapter.updateOne(action.payload.featureOne, state);
        // }
        //
        // case AuthActionTypes.UpdateFeatureOnes: {
        //     return adapter.updateMany(action.payload.featureOnes, state);
        // }
        //
        // case AuthActionTypes.DeleteFeatureOne: {
        //     return adapter.removeOne(action.payload.id, state);
        // }
        //
        // case AuthActionTypes.DeleteFeatureOnes: {
        //     return adapter.removeMany(action.payload.ids, state);
        // }
        //
        // case AuthActionTypes.LoadFeatureOnes: {
        //     return adapter.addAll(action.payload.featureOnes, state);
        // }
        //
        // case AuthActionTypes.ClearFeatureOnes: {
        //     return adapter.removeAll(state);
        // }

        default: {
            return state;
        }
    }
}

// export const {
//     selectIds,
//     selectEntities,
//     selectAll,
//     selectTotal,
// } = adapter.getSelectors();

export const selectAuthState = createFeatureSelector<Auth>('auth');
export const getIsAuthenticated = createSelector(selectAuthState, (state: Auth) => state.uid !== null);
export const getError = createSelector(selectAuthState, (state: Auth) => state.error);
