import { AppController } from '../api-common/app-controller';
import { AccountManger } from '../../internal/AccountManager';
import { SqlHandler } from '../../internal/SqlHandler';
import { User } from '../../model';
import { Encryptor } from '../../internal/Encryptor';
import { Resource } from '../../model/Resource';
import { MemDb } from '../../internal/types';
import { DB } from '../../internal/interfaces';


export class AccountController extends AppController<User> {
	constructor(
			private acctManager: AccountManger = new AccountManger(),
			storage: DB<User>=new MemDb<User>()
		) {
		super(storage);
	}

	public async create(accountParams: User.CreationParams): Promise<boolean> {
		if (Resource.isValid(new User.CreationParams(), accountParams)
		&& !(await this.acctExists(accountParams))
		) {
			await this.acctManager.acctCreate(accountParams);
			return true;
		} else {
			throw new Error('Missing Account Creation Parameters');
		}
	}
	public async login(loginParams: {email: string, password: string}): Promise<string|false> {
		const { email } = loginParams;
		const user: User|false = await SqlHandler.getUserWhere({email});
		if (user) {
			if (loginParams.email === user.email &&
				user.password === Encryptor.hash(loginParams.password)){
				// create a new AuthToken and return it
				// const authToken = await AuthTokenHandler.create()
				// return authToken

				return 'this string should be replaced with a real auth token implementation';
			}
		} 
		return false;
	}

	public async verify(reqQuery: any) {
		if (reqQuery && reqQuery.verifCode) {
			return await this.acctManager.acctVerify(reqQuery.verifCode);
		} else {
			throw new Error('No account verification code provided');
		}
	}
	public async acctExists(acctParams: User.CreationParams): Promise<boolean> {
		return !!await SqlHandler.getUserWhere({ email: acctParams.email });
	}
}
