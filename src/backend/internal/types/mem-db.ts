import { DB, WhereQuery,  } from '../interfaces';
import { Resource } from '../../model/Resource';
import { Workflow } from '../../model';

export class MemDb<T extends Resource> implements DB<T> {

	private db: Map<string, T> = new Map();


	store(thing: T): void {
		this.db.set(thing.id, thing);
	}
	retrieve(thingId: string): T|undefined {
		return this.db.get(thingId);
	}
	retrieveAll(): T[] {
		const ret: T[] = [];
		this.db.forEach((value) => {
			ret.push(value);
		});
		return ret;
	}
	retriveWhere(where: WhereQuery): T[]{
		return this.retrieveAll().filter(ele => {
			for (const prop in where) {
				if (!(ele[prop] === where[prop]))
					return false;
			}
			return true;
		});
	}
	delete(thingId: string): boolean {
		return this.db.delete(thingId);
	}
}