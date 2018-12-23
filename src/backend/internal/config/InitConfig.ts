import * as crypto from 'crypto';
import * as fs from 'fs';
import * as prompts from 'prompts';
import { ConfAll } from './ConfAll';
import { ConfMailer } from './ConfMailer';
import { APP_CONF } from '../../conf';
import { Encryptor } from '../Encryptor';
import { ConfCrypt } from './ConfCrypt';
import { ConfigHandler } from './ConfHandler';

export class InitConfig {
	constructor(
		// private outPath: string=APP_CONF,
		private confHandler: ConfigHandler=new ConfigHandler(APP_CONF),
		private writeOut: boolean=true,
		private injections?: Object
	){}
	public async prompt() {
			const questions = [
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
					new ConfCrypt(answers.cryptSecret)
			);
			const jsonOut = JSON.stringify(outConf, null, 2);
			if (this.writeOut) {
				this.confHandler.setConf(outConf);
				this.confHandler.confWrite();
			}
			return jsonOut;
	}
}