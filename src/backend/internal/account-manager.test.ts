import 'jest';
import { AccountManger } from './account-manager';

describe('AccountManager tests', () => {
	it('Should create the acount manager', () => {
		expect(new AccountManger()).toBeTruthy();
	});
	// it('Should create an account', () => {
	// 	expect(new AccountManger().acctCreate({} as AccountCreationParams)).toBeTruthy();
	// });
});