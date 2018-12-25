import 'jest';
import { User } from './user';
import { Resource } from '../resource';

describe('User tests', () => {

	// const userCreationParamSchema = new User.CreationParams();

	// const username= 'hello@good.com';
	// const password = 'whazzup';
	// const firstName = 'Hasan';
	// const lastName = 'Ahmed';
	// const user = new User({
	// 	username,
	// 	password,
	// 	firstName,
	// 	lastName,
	// });
	// it('Should be created', () => {
	// 		expect(user).toBeTruthy();
	// });
	// it('Should have a hashed password', () => {
	// 	expect(user.password === password).toEqual(false);
	// 	expect(user.password === '').toEqual(false);
	// 	expect(user.password.length).toBeGreaterThan(0);
	// });
	// it('Should have a date property that is slightly less than now', () => {
	// 	expect(user.created).toBeGreaterThan(Date.now() -100);
	// });
	// it('Should have a hashed string as a value', () => {
	// 	expect(user.id.length).toBeGreaterThan(0);
	// 	expect(user.id).toEqual(jasmine.any(String));
	// });
	// describe('User.CreationParams', () => {
	// 	const ucp = new User.CreationParams();
	// 	it('Should have all falsey values by default', () => {
	// 		for(const key in ucp) {
	// 			expect(ucp[key]).toBeFalsy();
	// 		}
	// 	});
	// 	describe('User.CreationParams.isValid', () => {
	// 		it('Should return valid when params are empty, but properties are there', () => {
	// 			expect(Resource.isValid(userCreationParamSchema, ucp)).toEqual(true);
	// 		});
	// 		it('Should be false when empty object is passed in', () => {
	// 			expect(Resource.isValid(userCreationParamSchema, {})).toEqual(false);
	// 		});
	// 		it('Should be false when email is missing', () => {
	// 			expect(Resource.isValid(userCreationParamSchema, {
	// 				firstName,
	// 				lastName,
	// 				password
	// 			})).toEqual(false);
	// 		});
	// 	});
	// });
});
