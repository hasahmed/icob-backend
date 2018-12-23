import 'jest';
import { StepController } from './step-controller';
import { Step } from '../../model';
import { Nudge } from '../../../common/types';
const cont = new StepController();

describe('Step Controller Tests', () => {
	it('Should get created', () => {
		expect(cont).toBeTruthy();
	});
	describe('Create', () => {
		it('Should return false when Step.CreationParams arent there', () => {
			expect(cont.create()).toEqual(false);
		});
		it('Should return false when Step.CreationParams are invalid', () => {
			expect(cont.create({
				name: 'hello',
				nudge: 'This should be a Nudge[], but instead is a string',
				responsible: 'Me',
			} as unknown as Step.CreationParams)).toEqual(false);
		});
		it('Give the id of the steap if creation succeeded', () => {
			const id = cont.create({
				name: 'hello',
				nudges: [Nudge.EMAIL],
				responsible: 'Me',
			});
			expect(id).toBeTruthy();
			expect(id).toEqual(jasmine.any(String));
			if (id) { // make the typescript compiler happy
				expect(id.length).toBeGreaterThan(0);
			} else {
				expect(false).toBeTruthy(); // intential false assertion because this shouldn't be reached
			}
			expect(id === '').toEqual(false);
		});
	});
});
