import knex = require('knex');
import { UserSchema } from '../db/schema';
import { SQLITE_DB } from '../conf';
import { User } from '../model';
import { ConfigHandler } from './config/conf-handler';

export class SqlHandler {
	private static _knexInst: knex;
	private static init(){
		const conf = new ConfigHandler();
		const devDbConf = {
			client: 'sqlite3',
			connection: {
				filename: SQLITE_DB
			},
			useNullAsDefault: true
		};
		const prodDbConf = {
			client: 'pg',
			connection: {
				host: conf.db.host + ':' + conf.db.port,
				user: conf.db.username,
				password: conf.db.password,
				database: conf.db.dbName,
			}
		};
		let dbConf: Object = devDbConf;
	

		switch(conf.env.env) {
			case 'dev':
				dbConf = devDbConf;
				break;
			case 'stag':
				dbConf = devDbConf;
				break;
			case 'prod':
				dbConf = devDbConf; //we always use the same database for now
				break;
			default:
				throw new Error("Unknown ConfEnv.env setting. Should be one of 'dev', 'stag', 'prog', but was:" + conf.env.env);
		}

		SqlHandler._knexInst = knex(dbConf);
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
			const user = (await SqlHandler.knexInst()(UserSchema.tableName[1]!).where(where))[0];
			return user;
		} catch(err) {
			return false;
		}
	}
	public static async updateUser(userId: number, user: User): Promise<User|false> {
		try {
			return SqlHandler.knexInst()(UserSchema.tableName[1]!)
			.where('id', userId)
			.update(user);
		} catch(err) {
			return false;
		}
	}
}