import { CommonModule } from '@angular/common';
import { Inject, NgModule } from '@angular/core';
import { FirestoreAdapterService } from "@app/core/services";
import { Hero } from "@app/models/hero.model";
import { User } from "@app/models/user.model";
import { FirestoreDataService } from "@app/store/entity/services/firestore-data.service";
import { DefaultDataServiceConfig, EntityDataService, EntityMetadataMap, NgrxDataModule } from 'ngrx-data';

// firebase-functions-helper
const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'api',
    timeout: 10000
};

export const entityMetadata: EntityMetadataMap = {
    Hero: {},
    User: {}
};

export const pluralNames = { Hero: 'heroes' };

@NgModule({
    imports: [
        CommonModule,
        // NgrxDataModule.forRoot({ entityMetadata, pluralNames })
        NgrxDataModule.forRoot({ entityMetadata })
    ],
    declarations: [],
    providers: [
        // provide the custom data services: -->
        {
            provide: 'UserDataService',
            useFactory: (fas: FirestoreAdapterService) => (new FirestoreDataService<User>(fas)),
            deps: [FirestoreAdapterService]
        },
        {
            provide: 'HeroDataService',
            useFactory: (fas: FirestoreAdapterService) => (new FirestoreDataService<Hero>(fas)),
            deps: [FirestoreAdapterService]
        }
        // { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    ]
})
// export class EntityStoreModule {}
export class EntityStoreModule {
    constructor(entityDataService: EntityDataService,
                @Inject('UserDataService') userService: FirestoreDataService<User>,
                @Inject('HeroDataService') heroService: FirestoreDataService<Hero>) {
        entityDataService.registerService('User', userService.config('users'));
        entityDataService.registerService('Hero', heroService.config('heroes'));
    }
}
