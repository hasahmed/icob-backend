import knex = require('knex');
import { UserSchema } from '../db/schema';
import { SQLITE_DB } from '../conf';
import { User } from '../model';

export class SqlHandler {
	private static _knexInst: knex;
	private static init(){
		SqlHandler._knexInst = knex({
			client: 'sqlite3',
			connection: {
				filename: SQLITE_DB
			},
			useNullAsDefault: true
		});
	}
	private static knexInst(): knex {
		if (!this._knexInst) {
			SqlHandler.init();
		}
		return this._knexInst;
	}
	public static async createAccount(user: User): Promise<boolean> {
		await SqlHandler.knexInst()(UserSchema.tableName[1]!).insert(user);
		return true;
	}
	public static async getUserWhere(where: Object): Promise<User|false> {
		try {
			return (await SqlHandler.knexInst()(UserSchema.tableName[1]!).where(where))[0];
		} catch(err) {
			return false;
		}
	}
	public static async updateUser(user: User): Promise<User|false> {
		try {
			return SqlHandler.knexInst()(UserSchema.tableName[1]!)
			.where(UserSchema.id[1], user.id)
			.update(user);
		} catch(err) {
			return false;
		}
	}
}