import { MemDb } from "./mem-db";
import { FakeSeedData } from "./fake-seed-data";
import { Instance, Workflow } from "../../model";

// export class FakeDb extends MemDb<Beginning|BeginningTemplate> {
export class FakeDb extends MemDb<Workflow|Instance> {
	constructor(){
		super();
		const fsd = new FakeSeedData();
		fsd.templates.forEach(begT => {
			this.store(begT);
		});
		fsd.beginnings.forEach(beg => {
			this.store(beg);
		});
	}
}

export const FAKE_DB = new FakeDb();