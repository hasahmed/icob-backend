import { DB, WhereQuery } from '../interfaces';
import { Resource } from '../../model/Resource';
export declare class MemDb<T extends Resource> implements DB<T> {
    private db;
    store(thing: T): void;
    retrieve(thingId: string): T | undefined;
    retrieveAll(): T[];
    retriveWhere(where: WhereQuery): T[];
    delete(thingId: string): boolean;
}
