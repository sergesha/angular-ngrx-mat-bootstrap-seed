import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FeatureTwo } from './feature-two.model';
import { FeatureTwoActions, FeatureTwoActionTypes } from './feature-two.actions';

export interface State extends EntityState<FeatureTwo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FeatureTwo> = createEntityAdapter<FeatureTwo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: FeatureTwoActions
): State {
  switch (action.type) {
    case FeatureTwoActionTypes.AddFeatureTwo: {
      return adapter.addOne(action.payload.featureTwo, state);
    }

    case FeatureTwoActionTypes.UpsertFeatureTwo: {
      return adapter.upsertOne(action.payload.featureTwo, state);
    }

    case FeatureTwoActionTypes.AddFeatureTwos: {
      return adapter.addMany(action.payload.featureTwos, state);
    }

    case FeatureTwoActionTypes.UpsertFeatureTwos: {
      return adapter.upsertMany(action.payload.featureTwos, state);
    }

    case FeatureTwoActionTypes.UpdateFeatureTwo: {
      return adapter.updateOne(action.payload.featureTwo, state);
    }

    case FeatureTwoActionTypes.UpdateFeatureTwos: {
      return adapter.updateMany(action.payload.featureTwos, state);
    }

    case FeatureTwoActionTypes.DeleteFeatureTwo: {
      return adapter.removeOne(action.payload.id, state);
    }

    case FeatureTwoActionTypes.DeleteFeatureTwos: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case FeatureTwoActionTypes.LoadFeatureTwos: {
      return adapter.addAll(action.payload.featureTwos, state);
    }

    case FeatureTwoActionTypes.ClearFeatureTwos: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
