import { Resource } from '../Resource';
import { Nudge } from '../../../common/types';
import { Actions } from '../action/action';

export class Step extends Resource {
	name: string='';
	responsible: string='';
	nudges: Set<Nudge>=new Set();
	completed: boolean=false;
	actions: Actions={};
	public constructor(
		creationParams: Step.CreationParams=new Step.CreationParams()
	){
		super();
		this.nudges = new Set(creationParams.nudges);
		delete creationParams.nudges;
		Object.assign(this, creationParams);
		this.nudges.add(Nudge.IN_APP); // Should always be notified in-app
	}
	toJSON() {
		return {
			...this,
			nudges: Array.from(this.nudges)
		};
	}
}
// this internal class is used for verifying parameters
// coming in from frontend. And it is namespaced so it looks like its an
// internal class. But it can't actually be because then we couldn't use it as a type of parameter
export namespace Step {
	export class CreationParams extends Resource.CreationParams {
		name: string='';
		responsible: string='';
		nudges: Nudge[]=[];
		actions?: Actions;

		public constructor(params?: Step.CreationParams){
			super(params);
		}
	}
}
