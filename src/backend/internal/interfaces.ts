export interface WhereQuery {
	[key: string]: any;
}
export interface DB<T> {
	store(thing: T): void;
	retrieve(thingId: string): T|undefined;
	retriveWhere(where: WhereQuery): T[];
	retrieveAll(): T[];
	delete(thingId: string): boolean;
}