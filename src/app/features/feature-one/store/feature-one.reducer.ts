import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { FeatureOne } from './feature-one.model';
import { FeatureOneActions, FeatureOneActionTypes } from './feature-one.actions';

export interface FeatureOneState extends EntityState<FeatureOne> {
  // additional entities state properties
}

export const adapter: EntityAdapter<FeatureOne> = createEntityAdapter<FeatureOne>();

export const initialState: FeatureOneState = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: FeatureOneActions
): FeatureOneState {
  switch (action.type) {
    case FeatureOneActionTypes.AddFeatureOne: {
      return adapter.addOne(action.payload.featureOne, state);
    }

    case FeatureOneActionTypes.UpsertFeatureOne: {
      return adapter.upsertOne(action.payload.featureOne, state);
    }

    case FeatureOneActionTypes.AddFeatureOnes: {
      return adapter.addMany(action.payload.featureOnes, state);
    }

    case FeatureOneActionTypes.UpsertFeatureOnes: {
      return adapter.upsertMany(action.payload.featureOnes, state);
    }

    case FeatureOneActionTypes.UpdateFeatureOne: {
      return adapter.updateOne(action.payload.featureOne, state);
    }

    case FeatureOneActionTypes.UpdateFeatureOnes: {
      return adapter.updateMany(action.payload.featureOnes, state);
    }

    case FeatureOneActionTypes.DeleteFeatureOne: {
      return adapter.removeOne(action.payload.id, state);
    }

    case FeatureOneActionTypes.DeleteFeatureOnes: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case FeatureOneActionTypes.LoadFeatureOnes: {
      return adapter.addAll(action.payload.featureOnes, state);
    }

    case FeatureOneActionTypes.ClearFeatureOnes: {
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
