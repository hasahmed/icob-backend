import { SqlHandler } from './sql-handler';
// import { AccountCreationParams} from './types';
// import * as uuidv4 from 'uuid/v4';
import { UserSchema } from '../db/schema';
import { User } from '../model';


export class AccountManger {

	private tmpAuthKeyTable: Map<string, string> = new Map();

	constructor(
	){}

	public async acctCreate(acctParams: User.CreationParams): Promise<boolean> {
		const user = new User(
				acctParams.email,
				acctParams.firstName,
				acctParams.lastName,
				acctParams.password
		);
		this.tmpAuthKeyTable.set(acctParams.email, user.tmpAuthHash); //for in memory checking implementation later
		await SqlHandler.createAccount(user);
		return true;
	}
	/**
	 * Called when user follows link from email
	 * @param authKey 
	 */
	public async acctVerify(authKey: string): Promise<boolean> {
		const user: User|false = await SqlHandler.getUserWhere({
			[`${UserSchema.tmpAuthHash[1]}`] : authKey
		});
		if (user) {
			user.tmpAuthHash = '';
			user.activated = true;
			SqlHandler.updateUser(user);
		} else {
			return false;
		}
		return true;
	}
}