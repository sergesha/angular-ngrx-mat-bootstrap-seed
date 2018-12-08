export interface Auth {
    uid:         string;
    displayName: string;
    email: string;
    photoURL: string;
    loading?:    boolean;
    error?:      string;
}

// export class User implements IUser {
//     constructor(public uid: string, public displayName: string) {}
// }
