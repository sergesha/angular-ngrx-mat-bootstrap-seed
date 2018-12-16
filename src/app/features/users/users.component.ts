import { Component, OnInit } from '@angular/core';
import { HeroModel, IHero } from '@app/models/hero.model';
import { UserModel } from '@app/models/user.model';
import { EntityCollectionService, EntityServices } from 'ngrx-data';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    users$: Observable<UserModel[]>;
    heroes$: Observable<HeroModel[]>;
    userService: EntityCollectionService<UserModel>;
    heroService: EntityCollectionService<HeroModel>;

    constructor(entityServices: EntityServices) {
        this.userService = entityServices.getEntityCollectionService<UserModel>('User');
        this.heroService = entityServices.getEntityCollectionService<HeroModel>('Hero');
    }

    ngOnInit() {
        this.users$ = this.userService.entities$;
        this.heroes$ = this.heroService.entities$;
        this.getUsers();

        const hero1: HeroModel = new HeroModel(<IHero>{
            id: 1,
            name: 'HeroModel',
            desc: 'The Hero'
        });

        const hero2: HeroModel = new HeroModel(<IHero>{
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

    addUser(user: UserModel) {
        this.userService.add(user);
    }

    deleteUser(user: UserModel) {
        this.userService.delete(user);
    }

    updateUser(user: UserModel) {
        this.userService.update(user);
    }
}
