import { Component, OnInit } from '@angular/core';
import { FirestoreAdapterService } from "@app/core/services";
import { Hero, IHero } from "@app/models/hero.model";
import { User } from "@app/models/user.model";
import { EntityCollectionService, EntityServices } from "ngrx-data";
import { Observable } from "rxjs";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users$: Observable<User[]>;
    userService: EntityCollectionService<User>;
    heroService: EntityCollectionService<Hero>;

    constructor(entityServices: EntityServices, private fas: FirestoreAdapterService) {
        this.userService = entityServices.getEntityCollectionService('User');
        this.heroService = entityServices.getEntityCollectionService('Hero');
    }

    ngOnInit() {
        this.users$ = this.userService.entities$;
        this.getUsers();

        const hero1: Hero = new Hero(<IHero>{
            id: 1,
            name: 'Hero',
            desc: 'The Hero'
        });

        const hero2: Hero = new Hero(<IHero>{
            id: 1,
            name: 'Hero 2',
            desc: 'The Hero 2'
        });

        this.heroService.add(hero1);
        this.heroService.getByKey(2);
        this.heroService.getWithQuery('name == Hero');
        // this.heroService.upsert(hero1);
        // this.heroService.update(hero2);
        // this.heroService.delete(hero1);

        // this.fas.upsert(`heroes/${hero1.id}`, hero1)
        //     .then(res => console.log('add success: ',res))
        //     .catch(err => console.error('add error: ',err));
        // this.fas.update(`heroes/${hero1.id}`, hero2)
        //     .then(res => console.log('update success: ', res))
        //     .catch(err => console.error('update error: ', err));
        // this.fas.delete(`heroes/${hero1.id}`)
        //     .then(res => console.log('delete success: ', res))
        //     .catch(err => console.error('delete error: ', err));
    }

    getUsers() {
        this.userService.getAll();
        this.heroService.getAll();
    }

    addUser(user: User) {
        this.userService.add(user);
    }

    deleteUser(user: User) {
        this.userService.delete(user);
    }

    updateUser(user: User) {
        this.userService.update(user);
    }
}
