import * as prompts from 'prompts';
import { ConfAll } from './conf-all';
import { APP_CONF } from '../../conf';
import { Encryptor } from '../encryptor';
import { ConfCrypt } from './conf-crypt';
import { ConfigHandler } from './conf-handler';
import { ConfEnv } from './conf-env';
import { ConfDb } from './conf-db';

export class PromptConfig {
	constructor(
		private confHandler: ConfigHandler=new ConfigHandler(APP_CONF),
		private writeOut: boolean=true,
		private injections?: Object
	){}
	public async prompt() {
			const questions = [
					// {
					// 		type: 'select',
					// 		name: 'env',
					// 		message: 'The Enviorment the app is running in',
					// 		choices: [
					// 			{ title: 'Development', value: 'dev' },
					// 			{ title: 'Staging', value: 'stag' },
					// 			{ title: 'Production', value: 'prod' }
					// 	],
					// 	initial: 0
					// },
					// {
					// 		type: 'password',
					// 		name: 'cryptSecret',
					// 		format: (val) => {
					// 			if (!val) return Encryptor.hash(Encryptor.randomString()); // secret is random if none is provided
					// 				return Encryptor.hash(val);
					// 		},
					// 		message: 'The secrete for keys to be decrypted against'
					// },
					// {
					// 		type: 'text',
					// 		name: 'adminUsername',
					// 		initial: 'beginadmin',
					// 		message: 'Username of the application admin'
					// },
					// {
					// 		type: 'password',
					// 		name: 'adminPass',
					// 		format: (val) => {
					// 				return Encryptor.hash(val);
					// 		},
					// 		message: 'Password of the application admin'
					// },
					// database conf
					// {
					// 	type: 'text',
					// 	name: 'dbName',
					// 	initial: 'icob-app-db',
					// 	message: 'Name of the database'
					// },
					{
						type: 'number',
						name: 'serverPort',
						initial: 3030,
						message: 'The port the server will serve on'
					}
					// postgress specific
					// {
					// 	type: 'text',
					// 	name: 'dbUsername',
					// 	initial: 'dbuser',
					// 	message: 'Username of Postgress user'
					// },
					// {
					// 	type: 'password',
					// 	name: 'dbPass',
					// 	format: (val) => {
					// 				return Encryptor.hash(val);
					// 	},
					// 	message: 'Password of the Postgress user'
					// },
					// {
					// 	type: 'text',
					// 	name: 'dbHost',
					// 	initial: 'localhost',
					// 	message: 'Host of the Postgress database'
					// },
					// {
					// 	type: 'number',
					// 	name: 'dbPort',
					// 	initial: 3030,
					// 	message: 'Port of the Postgress database'
					// }
			] as prompts.PromptObject<string>[];
			if (this.injections) {
				prompts.inject(this.injections);
			}
			const answers = await prompts(questions);
			const outConf = new ConfAll(
					new ConfCrypt(),
					new ConfEnv(
						'prod',
						answers.serverPort
						),
					new ConfDb()
			);
			const jsonOut = JSON.stringify(outConf, null, 2);
			if (this.writeOut) {
				this.confHandler.setConf(outConf);
				this.confHandler.confWrite();
			}
			return jsonOut;
	}
}