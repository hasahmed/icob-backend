import * as chance from 'chance';
import { Workflow, Step, Instance } from '../../model';
import { Nudge } from '../../../common/types';
import { RandomData } from './random-data';


export class FakeSeedData {

	beginnings: Instance[] = [];
	templates: Workflow[] = [];

	constructor(){

		for (let i = 0; i < 5; i++) {
			const begInst =
				new Instance(
					BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING,
						RandomData.randomFullName()

				);
			this.beginnings.push(begInst);
			for (let i = 0; i < chance().natural({min: 0, max: begInst.steps.length -1 }); i++)
				begInst.completeStep();
			this.beginnings.push(begInst);
		}
		for (let i = 0; i < 5; i++) {
			const begInst =
				new Instance(
					BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING,
						RandomData.randomFullName()
				);
			for (let i = 0; i < chance().natural({min: 0, max: begInst.steps.length -1 }); i++)
				begInst.completeStep();
			this.beginnings.push(begInst);
		}

		this.templates.push(
			BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING,
			BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING
		);
	}
}



export const BEGINNING_TEMPLATES = {
	EMPLOYEE_ONBOARDING: new Workflow({
		name: "Employee Onboarding",
		steps: [
			new Step({
				name: "NDA & Non-Compete",
				nudges: [Nudge.EMAIL],
				responsible: "tanja@periodic.is"
			}),
			new Step({
				name: "Benefits Enrollment",
				nudges: [Nudge.EMAIL],
				responsible: "tanja@periodic.is"
			}),
			new Step({
				name: "Policies Training",
				nudges: [Nudge.EMAIL],
				responsible: "nate@periodic.is"
			}),
			new Step({
				name: "Personal Orientation",
				nudges: [Nudge.EMAIL],
				responsible: "nate@periodic.is"
			})
		]
	}),
	CUSTOMER_ONBOARDING: new Workflow({
		name: "Customer OnBoarding",
		steps: [
			new Step({
				name: "AE Handoff Call",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
			new Step({
				name: "AE Handoff Call",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
			new Step({
				name: "Project Scope",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
			new Step({
				name: "Create Users",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
			new Step({
				name: "Quickstart Guide",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
			new Step({
				name: "Invoice",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
			new Step({
				name: "Swag Bag",
				nudges: [Nudge.EMAIL],
				responsible: RandomData.randomEmail()
			}),
		]
	})
};