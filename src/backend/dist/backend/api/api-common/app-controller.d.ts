import { DB, WhereQuery } from "../../internal/interfaces";
import { Resource } from "../../model/Resource";
export declare class AppController<T extends Resource> {
    protected storage: DB<T>;
    constructor(storage: DB<T>);
    put(thing: T): void;
    get(): T[];
    getOne(thingId: string): T;
    getWhere(where: WhereQuery): T[];
    delete(thingId: string): void;
}
