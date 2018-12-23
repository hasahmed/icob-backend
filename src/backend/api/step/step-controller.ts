import { AppController } from '../api-common/app-controller';
import { Step } from '../../model';
import { Resource } from '../../model/Resource';
import { DB } from '../../internal/interfaces';
import { MemDb } from '../../internal/types';



export class StepController extends AppController<Step> {
	constructor(
		storage: DB<Step> = new MemDb<Step>()
	){
		super(storage);
	}
	public create(stepCP?: Step.CreationParams): string|false{
		if (!stepCP)
			return false;
		if (!Resource.isValid(new Step.CreationParams(), stepCP))
			return false;
		
		const step = new Step(stepCP);
		this.storage.store(step);
		return step.id;
	}
}

