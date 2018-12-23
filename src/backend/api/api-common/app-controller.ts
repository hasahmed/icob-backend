import { DB, WhereQuery } from "../../internal/interfaces";
import { Resource } from "../../model/Resource";
import { InvalidIdError } from "../../../common/types";

/**
 * T is the type of resource that the controller is responsible for
 */

export class AppController<T extends Resource> {
	constructor(
		protected storage: DB<T>
	){}

	put(thing: T): void {
		this.storage.store(thing);
	}
	get(): T[] {
		return this.storage.retrieveAll();
	}
	getOne(thingId: string): T {
		const ret = this.storage.retrieve(thingId);
		if (ret) return ret;
		throw new InvalidIdError();
	}
	getWhere(where: WhereQuery): T[] {
		return this.storage.retriveWhere(where);
	}
	delete(thingId: string): void {
		this.storage.delete(thingId);
	}
}