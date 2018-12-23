import 'jest';
import { InstanceController } from './instance-controller';
import { Workflow, Instance } from '../../model';
import { MemDb } from '../../internal/types';
import { BEGINNING_TEMPLATES } from '../../internal/types/fake-seed-data';
import { RandomData } from '../../internal/types/random-data';

const cont = new InstanceController(
	new MemDb<Instance>()
);
describe('Beginning Controller Tests', () => {
	it('Should get created', () => {
		expect(cont).toBeTruthy();
	});
	describe('Create', () => {
		it('Give the id of the beginning if creation succeeded', () => {
			const id = cont.create(
				BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING,
				"Katherine Ahmed"
			);
			expect(id).toBeTruthy();
			expect(id).toEqual(jasmine.any(String));
			expect(id.length).toBeGreaterThan(0);
			expect(id === '').toEqual(false);
		});
	});
	describe('Get', () => {
		it('Should retrieve all', () => {
			const b = new Instance(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "John Doe");
			const bc = new InstanceController(
				new MemDb<Instance>()
			);
			const startingAmount = bc.get()!['length'] || 0;
			for(let i = 0; i < 100; i++){
				bc.create(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, RandomData.randomFullName());
			}
			bc.put(b);
			const results = bc.get();
			if (Workflow.isBeginningTemplate(results)){

			}
			expect(results!['length']).toEqual(101 + startingAmount);
		});
		it('Should return a signle object when given an instance', () => {
			const b = new Instance(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "John Doe");
			const bc = new InstanceController(
				new MemDb<Instance>()
			);
			for(let i = 0; i < 3; i++) {
				bc.create(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "Fatima Ahmed");
			}
			bc.put(b);
			const result = bc.getOne(b.id);
			expect(result).toBeTruthy();
			expect(result).toEqual(b);
			if (!Workflow.isBeginningTemplate(result))
				throw new Error('This block shouldn\'t be reached');
		});
	});
});
