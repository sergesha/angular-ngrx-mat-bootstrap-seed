import { OperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';

export function pipeLog<T>(message?: string): OperatorFunction<T, T> {
    return tap(e => console.log(message, e));
}

export function reduceObject<T, K extends keyof T, S extends T>(sourceObject: S, keyList: K[]): T | null {
    if (sourceObject) {
        return keyList.reduce((obj, key) =>
            ({ ...obj, [key]: sourceObject[key] }), {}) as T;
    }
    return null;
}

export const arrayToObject = keyField => arr =>
    Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));

export const APP_HELPERS = {
    arrayToObject,
    reduceObject,
    pipeLog
};
