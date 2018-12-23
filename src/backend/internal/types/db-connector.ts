import { DB, WhereQuery } from "../interfaces";

export class DbConnector<T> implements DB<T> {
	constructor(
		private db: DB<any>,
		private ctor: {new ():T}
		) {}
	store(beg: T): void {
		this.db.store(beg);
	}
	retrieve(begId: string): T|undefined {
		const ret = this.db.retrieve(begId);
		if (ret instanceof this.ctor) return ret;
		else return;
	}
	retrieveAll(): T[] {
		return this.db.retrieveAll().filter(thing => thing instanceof this.ctor) as T[];
	}
	retriveWhere(where: WhereQuery): T[] {
		return this.retrieveAll().filter(beg => {
			for (const prop in where) {
				if (beg[prop] !== where[prop])
					return false;
			}
			return true;
		});
	}
	delete(begId: string): boolean {
		return this.db.delete(begId);
	}
}
