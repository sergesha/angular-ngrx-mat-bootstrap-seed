import { Injectable } from '@angular/core';
import { Hero } from "@app/models/hero.model";
import { FirestoreDataConfig, FirestoreDataService } from "@app/store/entity/services/firestore-data.service";

@Injectable()
@FirestoreDataConfig({
    collectionName: 'heroes'
})
export class HeroDataService extends FirestoreDataService<Hero> {
}
