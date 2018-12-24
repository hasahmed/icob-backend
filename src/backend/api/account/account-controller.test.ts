import 'jest';
import { SqlHandler } from '../../internal/sql-handler';
import { Encryptor } from '../../internal/encryptor';
import { User } from '../../model';
import { AccountController } from './account-controller';
import { AccountManger } from '../../internal/account-manager';

const acctCont = new AccountController(
	new AccountManger()
);


const loginParams = {
	email: "hello@google.com",
	password: "goodPassword",
};

const returnedUser: User = new User(
	'hello@gmail.com',
	'AFirstName',
	'ALastName',
	Encryptor.hash('aGoodPassword')
);

describe('Account.Controller tests', () => {
	it('Should be created successfully', () => {
		expect(acctCont).toBeTruthy();
	});
	// it('Should login when email and password are correct', async () => {
	// 	spyOn(SqlHandler, "getUserWhere").and.returnValue(returnedUser);
	// 	expect(acctCont.login(loginParams)).toEqual('this string should be\
	//replaced with a real auth token implementation');
	// });
});