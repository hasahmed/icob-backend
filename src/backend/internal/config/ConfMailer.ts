export class ConfMailer {
	constructor(
		public email: string = 'test@test.com',
		public hashedPassword: string = 'testPassword',
		public service: string = 'gmail' // one of https://nodemailer.com/smtp/well-known/ or customize nodemailer
	) {}
}
