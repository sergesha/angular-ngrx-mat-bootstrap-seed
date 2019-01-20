import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { FeatureOne } from './feature-one.model';

export enum FeatureOneActionTypes {
  LoadFeatureOnes = '[FeatureOne] Load FeatureOnes',
  AddFeatureOne = '[FeatureOne] Add FeatureOne',
  UpsertFeatureOne = '[FeatureOne] Upsert FeatureOne',
  AddFeatureOnes = '[FeatureOne] Add FeatureOnes',
  UpsertFeatureOnes = '[FeatureOne] Upsert FeatureOnes',
  UpdateFeatureOne = '[FeatureOne] Update FeatureOne',
  UpdateFeatureOnes = '[FeatureOne] Update FeatureOnes',
  DeleteFeatureOne = '[FeatureOne] Delete FeatureOne',
  DeleteFeatureOnes = '[FeatureOne] Delete FeatureOnes',
  ClearFeatureOnes = '[FeatureOne] Clear FeatureOnes'
}

export class LoadFeatureOnes implements Action {
  readonly type = FeatureOneActionTypes.LoadFeatureOnes;

  constructor(public payload: { featureOnes: FeatureOne[] }) {}
}

export class AddFeatureOne implements Action {
  readonly type = FeatureOneActionTypes.AddFeatureOne;

  constructor(public payload: { featureOne: FeatureOne }) {}
}

export class UpsertFeatureOne implements Action {
  readonly type = FeatureOneActionTypes.UpsertFeatureOne;

  constructor(public payload: { featureOne: FeatureOne }) {}
}

export class AddFeatureOnes implements Action {
  readonly type = FeatureOneActionTypes.AddFeatureOnes;

  constructor(public payload: { featureOnes: FeatureOne[] }) {}
}

export class UpsertFeatureOnes implements Action {
  readonly type = FeatureOneActionTypes.UpsertFeatureOnes;

  constructor(public payload: { featureOnes: FeatureOne[] }) {}
}

export class UpdateFeatureOne implements Action {
  readonly type = FeatureOneActionTypes.UpdateFeatureOne;

  constructor(public payload: { featureOne: Update<FeatureOne> }) {}
}

export class UpdateFeatureOnes implements Action {
  readonly type = FeatureOneActionTypes.UpdateFeatureOnes;

  constructor(public payload: { featureOnes: Update<FeatureOne>[] }) {}
}

export class DeleteFeatureOne implements Action {
  readonly type = FeatureOneActionTypes.DeleteFeatureOne;

  constructor(public payload: { id: string }) {}
}

export class DeleteFeatureOnes implements Action {
  readonly type = FeatureOneActionTypes.DeleteFeatureOnes;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearFeatureOnes implements Action {
  readonly type = FeatureOneActionTypes.ClearFeatureOnes;
}

export type FeatureOneActions =
 | LoadFeatureOnes
 | AddFeatureOne
 | UpsertFeatureOne
 | AddFeatureOnes
 | UpsertFeatureOnes
 | UpdateFeatureOne
 | UpdateFeatureOnes
 | DeleteFeatureOne
 | DeleteFeatureOnes
 | ClearFeatureOnes;
