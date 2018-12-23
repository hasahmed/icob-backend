import { ConfMailer } from './ConfMailer';
import { ConfCrypt } from './ConfCrypt';

export class ConfAll {
	constructor(
		public mailer: ConfMailer=new ConfMailer(),
		public crypt: ConfCrypt=new ConfCrypt()
	) {}
}