import { Resource } from '../Resource';
import { Step } from '../step/step';
import { Instance } from '../instance/instance';

// this is where steps will be added, and the parameters will be defined
// for what is needed for the instance

export class Workflow extends Resource {
	name: string='';
	steps: Step[]=[];
	children?: Instance[];


	public constructor(
		creationParams: Workflow.CreationParams = new Workflow.CreationParams()
		){
		super();
		Object.assign(this, creationParams);
	}

	// type guard
	static isBeginningTemplate(beg: Workflow|undefined|Workflow[]): beg is Workflow {
		return !!beg && !this.isBeginningTemplateArray(beg);
	}
	static isBeginningTemplateArray(beg: Workflow|undefined|Workflow[]): beg is Workflow {
		if (beg) {
			if ((<Workflow[]>beg).length !== undefined)
				return true;
		}
		return false;
	}
}




// this internal class is used for verifying parameters
// coming in from frontend. And it is namespaced so it looks like its an
// internal class. But it can't actually be because then we couldn't use it as a type of parameter
export namespace Workflow {
	export class CreationParams extends Resource.CreationParams {
		name: string='';
		steps: Step[]=[];
		public constructor(params?: Workflow.CreationParams){
			super(params);
		}
	}
}