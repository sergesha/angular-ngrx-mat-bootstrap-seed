import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';


@Injectable()
export class FeatureTwoEffects {

  constructor(private actions$: Actions) {}
}
