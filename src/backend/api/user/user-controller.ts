import { AppController } from '../api-common/app-controller';
import { SqlHandler } from '../../internal/sql-handler';
import { User } from '../../model';
import { Encryptor } from '../../internal/encryptor';
import { Resource } from '../../model/resource';
import { MemDb } from '../../internal/types';
import { DB } from '../../internal/interfaces';


export class UserController extends AppController<User> {
	constructor(
			storage: DB<User>=new MemDb<User>() // this is unused but should be implemented for sql (maybe)
		) {
		super(storage);
	}

	// rest
	public async create(accountParams: User.CreationParams): Promise<boolean> {
		if (Resource.isValid(new User.CreationParams(), accountParams)
		&& !(await this.acctExists(accountParams))
		) {
			return true;
		} else {
			throw new Error('Missing Account Creation Parameters');
		}
	}
	public async login(loginParams: {username : string, password: string}): Promise<boolean> {
		const { username } = loginParams;
		const user: User|false = await SqlHandler.getUserWhere({username});
		if (user) {
			if (username === user.username &&
				user.password === Encryptor.hash(loginParams.password)){
					return true
			}
		} 
		return false
	}
	public async acctExists(acctParams: User.CreationParams): Promise<boolean> {
		return !!await SqlHandler.getUserWhere({ username: acctParams.username});
	}
	public async acctCreate(acctParams: User.CreationParams): Promise<boolean> {
		const user = new User({
				username: acctParams.username,
				password: acctParams.password,
				firstName: acctParams.firstName,
				lastName: acctParams.lastName
		});
		await SqlHandler.createAccount(user);
		return true;
	}
}
