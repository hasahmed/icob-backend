import { User } from '../model';
export declare class SqlHandler {
    private static _knexInst;
    private static init;
    private static knexInst;
    static createAccount(user: User): Promise<boolean>;
    static getUserWhere(where: Object): Promise<User | false>;
    static updateUser(user: User): Promise<User | false>;
}
