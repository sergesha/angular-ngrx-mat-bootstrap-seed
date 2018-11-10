import { Injectable } from '@angular/core';
import { FirestoreAdapterService } from "@app/core/services";
import { EntityCollectionDataService, QueryParams, Update } from "ngrx-data";
import { Observable } from "rxjs";

@Injectable()
export class FirestoreDataService<T> implements EntityCollectionDataService<T> {
    name: string;
    colName: string;

    constructor(private db: FirestoreAdapterService) {
        this.name = 'Firestore Custom Data Service';
    }

    config(colName: string) {
        this.colName = colName;
        return this;
    }

    add(entity: T): Observable<T> {
        // return from(this.db.add('users', entity));
        return this.bazinga();
    }

    delete(id: any): Observable<null> {
        return this.bazinga();
    }

    getAll(): Observable<T[]> {
        // return this.db.colWithIds$('users');
        return this.db.colWithIds$(this.colName);
    }

    getById(id: any): Observable<T> {
        return this.bazinga();
    }

    getWithQuery(params: string | QueryParams): Observable<T[]> {
        return this.bazinga();
    }

    update(update: Update<T>): Observable<T> {
        return this.bazinga();
    }

    upsert(entity: T): Observable<T> {
        return this.bazinga();
    }

    private bazinga(): any {
        bazingaFail();
        return undefined;
    }
}

function bazingaFail() {
    throw new Error('Bazinga! This method is not implemented.');
}
