import { Injectable } from '@angular/core';
import { Hero } from "@app/models/hero.model";
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory
} from 'ngrx-data';

@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Hero> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Hero', serviceElementsFactory);
    }
}
