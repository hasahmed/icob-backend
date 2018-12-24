import * as prompts from 'prompts';
import { ConfAll } from './conf-all';
import { ConfMailer } from './conf-mailer';
import { APP_CONF } from '../../conf';
import { Encryptor } from '../Encryptor';
import { ConfCrypt } from './conf-crypt';
import { ConfigHandler } from './conf-handler';
import { ConfDb } from './conf-db';
import { ConfEnv } from './conf-env';

export class InitConfig {
	constructor(
		private confHandler: ConfigHandler=new ConfigHandler(APP_CONF),
		private writeOut: boolean=true,
		private injections?: Object
	){}
	public async prompt() {
			const questions = [
					{
							type: 'select',
							name: 'env',
							message: 'The Enviorment the app is running in',
							choices: [
								{ title: 'Development', value: 'dev' },
								{ title: 'Staging', value: 'stag' },
								{ title: 'Production', value: 'prod' }
						],
						initial: 1
					},
					{
							type: 'password',
							name: 'cryptSecret',
							format: (val) => {
								if (!val) return Encryptor.hash(Encryptor.randomString()); // secret is random if none is provided
									return Encryptor.hash(val);
							},
							message: 'The secrete for keys to be decrypted against'
					},
					{
							type: 'text',
							name: 'mailerEmail',
							initial: 'customerservice@begin.com',
							message: `Email customers will recieve emails from when they sign up`
					},
					{
							type: 'text',
							name: 'mailerService',
							initial: 'gmail',
							message: 'Email service provider of entered email'
					},
					{
							type: 'password',
							name: 'mailerPass',
							format: (val, values) => {
								return new Encryptor(new ConfCrypt(values.cryptSecret)).encrypt(val);
							},
							message: 'Password of given email. (It will be encrypted)'
					},
					{
							type: 'text',
							name: 'adminUsername',
							initial: 'beginadmin',
							message: 'Username of the application admin'
					},
					{
							type: 'password',
							name: 'adminPass',
							format: (val) => {
									return Encryptor.hash(val);
							},
							message: 'Password of the application admin'
					},
					// database conf
					{
						type: 'text',
						name: 'dbName',
						initial: 'begin-db',
						message: 'Name of the database'
					},
					{
						type: 'text',
						name: 'dbUsername',
						initial: 'dbuser',
						message: 'Username of Postgress user'
					},
					{
						type: 'password',
						name: 'dbPass',
						format: (val) => {
									return Encryptor.hash(val);
						},
						message: 'Password of the Postgress user'
					},
					{
						type: 'text',
						name: 'dbHost',
						initial: 'localhost',
						message: 'Host of the Postgress database'
					},
					{
						type: 'number',
						name: 'dbPort',
						initial: 3030,
						message: 'Port of the Postgress database'
					}
			] as prompts.PromptObject<string>[];
			if (this.injections) {
				// here for testing purposes
				prompts.inject(this.injections);
			}
			const answers = await prompts(questions);
			const outConf = new ConfAll(
					new ConfMailer(
							answers.mailerEmail,
							answers.mailerPass
					),
					new ConfCrypt(answers.cryptSecret),
					new ConfDb(
						answers.dbName,
						answers.dbUsername,
						answers.dbPass,
						answers.dbHost,
						answers.dbPort,
					),
					new ConfEnv(
						answers.env
					)
			);
			const jsonOut = JSON.stringify(outConf, null, 2);
			if (this.writeOut) {
				this.confHandler.setConf(outConf);
				this.confHandler.confWrite();
			}
			return jsonOut;
	}
}