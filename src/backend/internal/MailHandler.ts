import * as nodemailer from 'nodemailer';
import { ConfMailer } from './config/conf-mailer';
import { ConfigHandler } from './config/conf-handler';
import { Encryptor } from './Encryptor';

export interface MailOptions {
	to: string | string[];
	subject: string;
	html: string;
}

export class MailHandler {
	private transporter: nodemailer.Transporter;
	constructor(
		private confMailer: ConfMailer=new ConfigHandler().mailer,
		private crydec: Encryptor=new Encryptor(new ConfigHandler().crypt)
	) {
		this.transporter = nodemailer.createTransport({
			service: this.confMailer.service,
			auth: {
				user: this.confMailer.email,
				pass: this.crydec.decrypt(this.confMailer.hashedPassword)
			}
		});
	}
	public sendMail(mailOptions: Object) {
		const mo = {
			from: this.confMailer.email,
			// from: 'customerservice@beginworkflows.com',
			...mailOptions
		};
		this.transporter.sendMail(mo, (err, info) => {
			console.log(err);
			console.log(info);
		});
	}
}