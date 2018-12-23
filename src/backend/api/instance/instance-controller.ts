import { AppController } from '../api-common/app-controller';
import { Instance, Workflow } from '../../model';
import { MemDb } from '../../internal/types';
import { DB, WhereQuery } from '../../internal/interfaces';
import { FakeSeedData } from '../../internal/types/fake-seed-data';

export class InstanceController extends AppController<Instance> {
	constructor(
		storage: DB<Instance> = new MemDb<Instance>()
	){
		super(storage);

	}
	seed(): void {
		const fsd = new FakeSeedData();
		fsd.beginnings.forEach(beg => {
			this.storage.store(beg);
		});
	}
	create(template: Workflow, reguarding: string): string {
		const beg = new Instance(template, reguarding);
		this.storage.store(beg);
		return beg.id;
	}
	// getAllByTemplate(): Meta.TemplateBeginnings[] {
	// 	return [new Meta.TemplateBeginnings()];
	// }
}