import 'jest';
import { Step } from './step';
import { Nudge } from '../../../common/types';

describe('Step Tests', () => {
	it('Should be able to create an instance', () => {
		expect(new Step({
			name: 'Benefits Enrollment',
			responsible: 'Katherine Ahmed',
			nudges: []
		})).toBeTruthy();
	});
	it('Should be have the passed in properties', () => {
		const stepName = 'Fillout NDA';
		const beg = new Step({
			name: stepName,
			responsible: 'Halima Badiyo',
			nudges: [Nudge.IN_APP, Nudge.EMAIL]
		});
		expect(beg.name).toEqual(stepName);
		expect(beg.responsible).toEqual('Halima Badiyo');
		expect(beg.nudges).toEqual(new Set([Nudge.IN_APP, Nudge.EMAIL]));
	});
	it('Should always have Nudge.IN_APP', () => {
		const beg = new Step({
			name: '',
			responsible: '',
			nudges: []
		});
		expect(beg.nudges.has(Nudge.IN_APP)).toEqual(true);
	});

	describe('CreationParams Tests', () => {
		it('Should be created', () => {
			expect(new Step.CreationParams()).toBeTruthy();
		});
		it('Should accept reasonable parameters', () => {
			expect(new Step.CreationParams({
				name: 'Email Resume to Tanja',
				responsible: 'Barak Obama',
				nudges: []
			})).toBeTruthy();
		});
	});
});