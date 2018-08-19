import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as fromFeatureOne from '../features/feature-one/store/feature-one.reducer';
import * as fromFeatureTwo from '../features/feature-two/store/feature-two.reducer';

export interface State {
  featureOne: fromFeatureOne.State;
  featureTwo: fromFeatureTwo.State;
}

export const reducers: ActionReducerMap<State> = {
    featureOne: fromFeatureOne.reducer,
    featureTwo: fromFeatureTwo.reducer
  }
;

export const metaReducers: MetaReducer<State>[] = !environment.production ? [ storeFreeze ] : [];
