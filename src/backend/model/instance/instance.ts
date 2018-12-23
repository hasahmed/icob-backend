import { Step } from '../step/step';
import { Resource } from '../Resource';
import { Workflow } from '../workflow/workflow';

export class Instance extends Resource {

	parentTemplateId: string='';
	parentName: string='';
	steps: Step[]=[];
	regarding: string='';
	completedSteps: Step[]=[];
	name: string='';
	currentStepIndex = 0;

	get currentStep(): Step {
		return this.steps[this.currentStepIndex];
	}
	completeStep(): void {
		if (this.isFinished()) return;
		this.completedSteps.push(this.steps[this.currentStepIndex]);
		this.currentStepIndex++;
		if (this.isFinished()) {
			this.onFinish();
			return;
		}
	}

	onFinish(){
	}
	isFinished() {
		return this.completedSteps.length === this.steps.length;
	}


	public constructor(
		template: Workflow = new Workflow(),
		reguarding: string='' // this is who its for be that 'GE' or 'Nate Latimer'. For cant be used because keyword
		){
			super();
			this.steps = template.steps.slice(); // duplicate the array of steps. Note this doesn't deep clone the steps
			this.regarding = reguarding;
			this.parentTemplateId = template.id;
			const tmpName = template.name + '_' + 'instance' + '_' + this.regarding;
			this.name = tmpName.replace(/ /g, '_');
			this.parentName = template.name;
	}
}