import { OperatorFunction } from "rxjs";
import { tap } from "rxjs/operators";

function pipeLog<T>(message?: string): OperatorFunction<T, T> {
    return tap(e => console.log(message, e));
}

const arrayToObject = keyField => arr =>
    Object.assign({}, ...arr.map(item => ({ [item[keyField]]: item })));

export const APP_HELPERS = {
    arrayToObject,
    pipeLog
};
