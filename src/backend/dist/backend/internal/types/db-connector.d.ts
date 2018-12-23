import { DB, WhereQuery } from "../interfaces";
export declare class DbConnector<T> implements DB<T> {
    private db;
    private ctor;
    constructor(db: DB<any>, ctor: {
        new (): T;
    });
    store(beg: T): void;
    retrieve(begId: string): T | undefined;
    retrieveAll(): T[];
    retriveWhere(where: WhereQuery): T[];
    delete(begId: string): boolean;
}
