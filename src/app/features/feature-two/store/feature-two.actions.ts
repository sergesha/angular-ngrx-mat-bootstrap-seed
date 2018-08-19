import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { FeatureTwo } from './feature-two.model';

export enum FeatureTwoActionTypes {
  LoadFeatureTwos = '[FeatureTwo] Load FeatureTwos',
  AddFeatureTwo = '[FeatureTwo] Add FeatureTwo',
  UpsertFeatureTwo = '[FeatureTwo] Upsert FeatureTwo',
  AddFeatureTwos = '[FeatureTwo] Add FeatureTwos',
  UpsertFeatureTwos = '[FeatureTwo] Upsert FeatureTwos',
  UpdateFeatureTwo = '[FeatureTwo] Update FeatureTwo',
  UpdateFeatureTwos = '[FeatureTwo] Update FeatureTwos',
  DeleteFeatureTwo = '[FeatureTwo] Delete FeatureTwo',
  DeleteFeatureTwos = '[FeatureTwo] Delete FeatureTwos',
  ClearFeatureTwos = '[FeatureTwo] Clear FeatureTwos'
}

export class LoadFeatureTwos implements Action {
  readonly type = FeatureTwoActionTypes.LoadFeatureTwos;

  constructor(public payload: { featureTwos: FeatureTwo[] }) {}
}

export class AddFeatureTwo implements Action {
  readonly type = FeatureTwoActionTypes.AddFeatureTwo;

  constructor(public payload: { featureTwo: FeatureTwo }) {}
}

export class UpsertFeatureTwo implements Action {
  readonly type = FeatureTwoActionTypes.UpsertFeatureTwo;

  constructor(public payload: { featureTwo: FeatureTwo }) {}
}

export class AddFeatureTwos implements Action {
  readonly type = FeatureTwoActionTypes.AddFeatureTwos;

  constructor(public payload: { featureTwos: FeatureTwo[] }) {}
}

export class UpsertFeatureTwos implements Action {
  readonly type = FeatureTwoActionTypes.UpsertFeatureTwos;

  constructor(public payload: { featureTwos: FeatureTwo[] }) {}
}

export class UpdateFeatureTwo implements Action {
  readonly type = FeatureTwoActionTypes.UpdateFeatureTwo;

  constructor(public payload: { featureTwo: Update<FeatureTwo> }) {}
}

export class UpdateFeatureTwos implements Action {
  readonly type = FeatureTwoActionTypes.UpdateFeatureTwos;

  constructor(public payload: { featureTwos: Update<FeatureTwo>[] }) {}
}

export class DeleteFeatureTwo implements Action {
  readonly type = FeatureTwoActionTypes.DeleteFeatureTwo;

  constructor(public payload: { id: string }) {}
}

export class DeleteFeatureTwos implements Action {
  readonly type = FeatureTwoActionTypes.DeleteFeatureTwos;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearFeatureTwos implements Action {
  readonly type = FeatureTwoActionTypes.ClearFeatureTwos;
}

export type FeatureTwoActions =
 LoadFeatureTwos
 | AddFeatureTwo
 | UpsertFeatureTwo
 | AddFeatureTwos
 | UpsertFeatureTwos
 | UpdateFeatureTwo
 | UpdateFeatureTwos
 | DeleteFeatureTwo
 | DeleteFeatureTwos
 | ClearFeatureTwos;
