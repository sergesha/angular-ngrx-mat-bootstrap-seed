// export interface EntityModelParams {
//     entityName: string;
// }

// export function EntityModel<T>(params: EntityModelParams) {
//     return function <T extends { new(...args: any[]): {} }>(constructor: T) {
//         console.log('EntityModel', params);
//         constructor.prototype._entityName = params._entityName;
//         return class extends constructor {
//             static readonly entityName = params._entityName;
//             _entityName = params._entityName;
//         };
//     };
// }

// export function EntityModel<T>(params: EntityModelParams) {
//     return function <T extends { new(...args: any[]): {} }>(constructor: T) {
//         // constructor.prototype._entityName = params._entityName;
//         Object.defineProperty(
//             constructor.prototype,
//             'entityName',
//             { get: () => params.entityName }
//         );
//         // return class extends constructor implements EntityModelParams {
//         //     static readonly _entityName = params._entityName;
//         //     _entityName = params._entityName;
//         // };
//     };
// }

// @EntityModel({
//     entityName: 'user'
// })
export class User {
    // static readonly entityName = 'user';
    id?: string;
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}
