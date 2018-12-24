import { ConfMailer } from './conf-mailer';
import { ConfCrypt } from './conf-crypt';
import { ConfDb } from './conf-db';
import { ConfEnv } from './conf-env';

export class ConfAll {
	constructor(
		public mailer: ConfMailer=new ConfMailer(),
		public crypt: ConfCrypt=new ConfCrypt(),
		public db: ConfDb=new ConfDb(),
		public env: ConfEnv=new ConfEnv()
	) {}
}