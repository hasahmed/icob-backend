import 'jest';
import { Workflow } from './workflow';

describe('BeginningTemplate tests', () => {
	it('Should be able to create an instance', () => {
		expect(new Workflow({
			name: '',
			steps: []
		})).toBeTruthy();
	});
	it('Should be have the passed in properties', () => {
		const begininngName = 'Employee Onboarding';
		const beg = new Workflow({
			name: begininngName,
			steps: []
		});
		expect(beg.steps).toEqual([]);
		expect(beg.name).toEqual(begininngName);
	});

	describe('CreationParams Tests', () => {
		it('Should be created', () => {
			expect(new Workflow.CreationParams()).toBeTruthy();
		});
		it('Should accept reasonable parameters', () => {
			expect(new Workflow.CreationParams({
				name: '',
				steps: []
			})).toBeTruthy();
		});
	});
});