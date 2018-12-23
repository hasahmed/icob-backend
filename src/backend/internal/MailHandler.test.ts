import 'jest';
import { MailHandler } from './MailHandler';

const mh = new MailHandler();


describe('MailHandler tests', () => {
	it('Should create an istance of mailHandler', () => {
		expect(mh).toBeTruthy();
	});
	it('Should send an email', () => {
		// mh.sendMail({
		// 	to: 'hasanyusufahmed@gmail.com',
		// 	subject: 'Welcome to Begin',
		// 	text: `Hello ${'name'},
		// 	Welcome to Begin. Prepare for life to be simplified`
		// });
	});
});
