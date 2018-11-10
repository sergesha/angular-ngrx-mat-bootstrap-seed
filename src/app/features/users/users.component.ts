import { Component, OnInit } from '@angular/core';
import { Hero } from "@app/models/hero.model";
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

    constructor(entityServices: EntityServices) {
        this.userService = entityServices.getEntityCollectionService('User');
        this.heroService = entityServices.getEntityCollectionService('Hero');
    }

    ngOnInit() {
        this.users$ = this.userService.entities$;
        this.getUsers();
    }

    getUsers() {
        this.userService.getAll();
        this.heroService.getAll();
    }

    addUser(user: User) {
        this.userService.add(user);
    }

    deleteUser(user: User) {
        // this.userService.delete(user.id);
    }

    updateUser(user: User) {
        this.userService.update(user);
    }
}
