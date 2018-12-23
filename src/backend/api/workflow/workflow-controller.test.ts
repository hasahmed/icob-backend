import 'jest';
import { BEGINNING_TEMPLATES, FakeSeedData } from '../../internal/types/fake-seed-data';
import { WorkflowController } from './workflow-controller';
import { MemDb } from '../../internal/types';
import { Workflow } from '../../model';
import { RandomData } from '../../internal/types/random-data';
import { InstanceController } from '../instance/instance-controller';

const begTCont = new WorkflowController();

describe('BeginningTemplate Controller Tests', () => {
	describe('Create', () => {
		it('Should return the ID of created', () => {
			const begT = begTCont.create({
				name: "Hello",
				steps: []
			});
			expect(begT).toBeTruthy();
			expect(begT).toEqual(jasmine.any(String));
		});
	});
	describe('Get', () => {
		it('Should retrieve all', () => {
			const begTCont = new WorkflowController();
			for (let i = 0; i < 100; i++) {
				begTCont.put(new Workflow({
					name: RandomData.randomName(),
					steps: BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING.steps
				}));
			}
			const all = begTCont.get();
			expect(all.length).toEqual(100);
		});
		it('Should get with children', () => {
			const begTCont = new WorkflowController(
				new MemDb<Workflow>(),
				new InstanceController()
			);
			begTCont['begCont'].seed(); //seeds with fake beginning instances
			begTCont.put(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING);
			const id = BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING.id;
			const allWithChildren = begTCont.getWithChildren(id);
			expect(allWithChildren).toBeTruthy();
			expect(allWithChildren!.children).toBeTruthy();
			expect(allWithChildren!.children!.length).toBeGreaterThan(0);
		});
	});
});
