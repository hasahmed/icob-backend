import { SqlHandler } from './sql-handler';
// import { AccountCreationParams} from './types';
// import * as uuidv4 from 'uuid/v4';
import { MailHandler, MailOptions } from './MailHandler';
import { UserSchema } from '../db/schema';
import { User } from '../model';


export class AccountManger {

	private tmpAuthKeyTable: Map<string, string> = new Map();

	constructor(
		private mailHandler: MailHandler=new MailHandler()
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
		const mailParams: MailOptions = {
			to: acctParams.email,
			subject: 'Welcome to Begin',
			html: `Hello ${acctParams.firstName},
			<br />
			Welcome to Begin. The following is your confirmation code.
			<pre>
			${user.tmpAuthHash}
			</pre>
			`
		};
		this.mailHandler.sendMail(mailParams);
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