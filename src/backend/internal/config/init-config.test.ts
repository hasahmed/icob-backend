import 'jest';
import * as path from 'path';
import { InitConfig } from './init-config';
import { ConfMailer } from './conf-mailer';
import { ConfCrypt } from './conf-crypt';
import { Encryptor } from '../encryptor';
import { ConfigHandler } from './conf-handler';

const testInitConfigPath = path.join(__dirname, 'test-conf.json');
const injectionObj = {
	cryptSecret: 'dontTell',
	mailerEmail: 'hasan@gmail.com',
	mailerService: 'gmail',
	mailerPass: 'aGoodPassword',
	adminUsername: 'beginAdmin',
	adminPass: 'aGoodPassword'
};
const confH = new ConfigHandler(testInitConfigPath);
let ic: InitConfig;
let jsonIn: Object;
const confMailerKey = 'mailer';
const confCryptKey = 'crypt';


describe('InitConfig tests', () => {
	beforeEach(async () => {
		ic = new InitConfig(confH, true, injectionObj);
		jsonIn = JSON.parse(await ic.prompt());
	});
	afterEach(() => {
		confH['confDelete']();
	});
	it('Should should return an object', async () => {
		expect(jsonIn).toBeTruthy();
	});
	it('should have all of the mailer properties', () => {
		expect(jsonIn[confMailerKey]).toBeTruthy();
		for (const key in new ConfMailer()) {
			expect(jsonIn[confMailerKey][key]).toBeTruthy();
		}
	});
	it('Should have all of the confCrypt properties', () => {
		expect(jsonIn[confCryptKey]).toBeTruthy();
		for (const key in new ConfCrypt()) {
			expect(jsonIn[confCryptKey][key]).toBeTruthy();
		}
	});

	it('Should have hashed mailer secret', () => {
		const encSecret = jsonIn[confCryptKey]['secret'];
		const plainSecret = injectionObj.cryptSecret;

		expect(encSecret).toBeTruthy();
		expect(plainSecret).toBeTruthy();
		expect(encSecret === plainSecret).toEqual(false);
	});

	it('Should have encrypted mailer password', () => {
		const encPass = jsonIn[confMailerKey]['hashedPassword'];
		const plainPass = injectionObj.mailerPass;

		expect(encPass).toBeTruthy();
		expect(plainPass).toBeTruthy();
		expect(encPass === plainPass).toEqual(false);
	});
	it('Should be able to decrypt the mailer password', () => {
		const encSecret = jsonIn[confCryptKey]['secret'];
		const encPass = jsonIn[confMailerKey]['hashedPassword'];
		const plainPass = injectionObj.mailerPass;
		const decryptor = new Encryptor(new ConfCrypt(encSecret));
		const decPass = decryptor.decrypt(encPass);

		expect(decryptor).toBeTruthy();
		expect(encPass === plainPass).toEqual(false);
		expect(decPass).toEqual(plainPass);
	});

	it('Should have written the file to the correct path', () => {
		expect(confH['confExists']()).toEqual(true);
	});
});