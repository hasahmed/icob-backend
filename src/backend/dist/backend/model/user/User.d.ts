import { Resource } from '../Resource';
export declare class User extends Resource {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    activated: boolean;
    tmpAuthHash: string;
    created: number;
    id: string;
    constructor(email: string, firstName: string, lastName: string, password: string);
}
export declare namespace User {
    class CreationParams extends Resource.CreationParams {
        email: string;
        firstName: string;
        lastName: string;
        password: string;
        constructor(params?: User.CreationParams);
    }
}
