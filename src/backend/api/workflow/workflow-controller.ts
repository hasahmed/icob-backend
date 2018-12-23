import { AppController } from '../api-common/app-controller';
import { Workflow } from '../../model';
import { MemDb } from '../../internal/types';
import { DB } from '../../internal/interfaces';
import { Resource } from '../../model/Resource';
import { InstanceController } from '../instance/instance-controller';



export class WorkflowController extends AppController<Workflow> {
	constructor(
		storage: DB<Workflow> = new MemDb<Workflow>(),
		private begCont: InstanceController = new InstanceController()
	){
		super(storage);
	}
	create(begTCp: Workflow.CreationParams): string {
		if (!Resource.isValid(new Workflow.CreationParams(), begTCp))
			throw new Error('InvalidParameterError');
		const begT = new Workflow(begTCp);
		this.storage.store(begT);
		return begT.id;
	}
	get(): Workflow[] {
		const all = super.get();
		return all.map(wrk => {
			wrk.children = undefined; // delete when children arent requested
			return wrk;
		});
	}

	getWithChildren(begTId: string): Workflow {
		const beg = this.getOne(begTId);
		const children = this.begCont.getWhere({
			parentTemplateId: beg.id
		});
		beg.children = children;
		return beg;
	}
	getAllWithChildren(): Workflow[] {
		return this.storage.retrieveAll().map(begT => {
			const begTWChildren = this.getWithChildren(begT.id);
			// console.log(begTWChildren.children);
			return begTWChildren;
		});
	}
}