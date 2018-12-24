import { ConfCrypt } from './conf-crypt';
import { ConfDb } from './conf-db';
import { ConfEnv } from './conf-env';

export class ConfAll {
	constructor(
		public crypt: ConfCrypt=new ConfCrypt(),
		public env: ConfEnv=new ConfEnv(),
		public db: ConfDb=new ConfDb()
	) {}
}