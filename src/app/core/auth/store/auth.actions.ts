import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Auth } from './auth.model';

export enum AuthActionTypes {
    LoadFeatureOnes = '[FeatureOne] Load FeatureOnes',
    AddFeatureOne = '[FeatureOne] Add FeatureOne',
    UpsertFeatureOne = '[FeatureOne] Upsert FeatureOne',
    AddFeatureOnes = '[FeatureOne] Add FeatureOnes',
    UpsertFeatureOnes = '[FeatureOne] Upsert FeatureOnes',
    UpdateFeatureOne = '[FeatureOne] Update FeatureOne',
    UpdateFeatureOnes = '[FeatureOne] Update FeatureOnes',
    DeleteFeatureOne = '[FeatureOne] Delete FeatureOne',
    DeleteFeatureOnes = '[FeatureOne] Delete FeatureOnes',
    ClearFeatureOnes = '[FeatureOne] Clear FeatureOnes',
    GET_USER = '[Auth] Get user',
    AUTHENTICATED = '[Auth] Authenticated',
    NOT_AUTHENTICATED = '[Auth] Not Authenticated',
    GOOGLE_LOGIN = '[Auth] Google login attempt',
    LOGOUT = '[Auth] Logout',
    AUTH_ERROR = '[Auth] Error'
}

// ----

export class GetUser implements Action {
    readonly type = AuthActionTypes.GET_USER;

    constructor(public payload?: Auth ) {
    }
}

export class Authenticated implements Action {
    readonly type = AuthActionTypes.AUTHENTICATED;

    constructor(public payload?: Auth ) {
    }
}

export class NotAuthenticated implements Action {
    readonly type = AuthActionTypes.NOT_AUTHENTICATED;

    constructor(public payload?: Auth ) {
    }
}

export class AuthError implements Action {
    readonly type = AuthActionTypes.AUTH_ERROR;

    constructor(public payload?: Auth ) {
    }
}

/// Google Login Actions

export class GoogleLogin implements Action {
    readonly type = AuthActionTypes.GOOGLE_LOGIN;

    constructor(public payload?: Auth ) {
    }
}

/// Logout Actions

export class Logout implements Action {
    readonly type = AuthActionTypes.LOGOUT;

    constructor(public payload?: any) {
    }
}

// ----
export class LoadFeatureOnes implements Action {
    readonly type = AuthActionTypes.LoadFeatureOnes;

    constructor(public payload: { featureOnes: Auth[] }) {
    }
}

export class AddFeatureOne implements Action {
    readonly type = AuthActionTypes.AddFeatureOne;

    constructor(public payload: { featureOne: Auth }) {
    }
}

export class UpsertFeatureOne implements Action {
    readonly type = AuthActionTypes.UpsertFeatureOne;

    constructor(public payload: { featureOne: Auth }) {
    }
}

export class AddFeatureOnes implements Action {
    readonly type = AuthActionTypes.AddFeatureOnes;

    constructor(public payload: { featureOnes: Auth[] }) {
    }
}

export class UpsertFeatureOnes implements Action {
    readonly type = AuthActionTypes.UpsertFeatureOnes;

    constructor(public payload: { featureOnes: Auth[] }) {
    }
}

export class UpdateFeatureOne implements Action {
    readonly type = AuthActionTypes.UpdateFeatureOne;

    constructor(public payload: { featureOne: Update<Auth> }) {
    }
}

export class UpdateFeatureOnes implements Action {
    readonly type = AuthActionTypes.UpdateFeatureOnes;

    constructor(public payload: { featureOnes: Update<Auth>[] }) {
    }
}

export class DeleteFeatureOne implements Action {
    readonly type = AuthActionTypes.DeleteFeatureOne;

    constructor(public payload: { id: string }) {
    }
}

export class DeleteFeatureOnes implements Action {
    readonly type = AuthActionTypes.DeleteFeatureOnes;

    constructor(public payload: { ids: string[] }) {
    }
}

export class ClearFeatureOnes implements Action {
    readonly type = AuthActionTypes.ClearFeatureOnes;
}

export type AuthActions =
    LoadFeatureOnes
    | AddFeatureOne
    | UpsertFeatureOne
    | AddFeatureOnes
    | UpsertFeatureOnes
    | UpdateFeatureOne
    | UpdateFeatureOnes
    | DeleteFeatureOne
    | DeleteFeatureOnes
    | ClearFeatureOnes
    // ----
    | GetUser
    | Authenticated
    | NotAuthenticated
    | GoogleLogin
    | AuthError
    | Logout;
