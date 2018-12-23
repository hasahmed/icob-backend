import 'jest';
import * as path from 'path';
import { ConfigHandler } from './ConfHandler';
import { ConfAll } from './ConfAll';
import { ConfMailer } from './ConfMailer';
import { Encryptor } from '../Encryptor';
import { ConfCrypt } from './ConfCrypt';

const testConfPath = path.join(process.cwd(), 'src', 'backend', 'tmp', 'testConf.json.tmp');

const SECRET = 'verySecretSecret';
const confCrypt = new ConfCrypt(SECRET);
const crydec = new Encryptor(
	confCrypt
);

const MAILER_SERVICE = 'gmail';
const MAILER_EMAIL = 'hello@goodbye.com';
const MAILER_PLAIN_PASS = 'aGoodPassword';
const MAILER_ENC_PASS = crydec.encrypt(MAILER_PLAIN_PASS);
const confMailer = new ConfMailer(
	MAILER_EMAIL,
	MAILER_ENC_PASS,
	MAILER_SERVICE
);
const confAll = new ConfAll(
	confMailer,
	confCrypt
);



const globalConfH = new ConfigHandler(testConfPath);
describe('ConfHandler Tests', () => {
	beforeAll(() => {
		globalConfH.setConf(confAll);
		globalConfH.confWrite();
	});
	afterAll(() => {
		globalConfH.confDelete();
	});

	it('Should be created', () => {
		expect(globalConfH).toBeTruthy();
	});

	it('Should have created the init file', () => {
		expect(globalConfH.confExists()).toEqual(true);
	});

	describe('Local ConfHandler', () => {
		let localConfH: ConfigHandler;
		beforeAll(() => {
			localConfH = new ConfigHandler(testConfPath);
			localConfH.confDelete(); //saftey measure
			localConfH.setConf(confAll);
			localConfH.confWrite();
		});
		it('Should read in the conf if it already exists', () => {
			expect(localConfH.confExists()).toEqual(true);
		});
		it('Should have the config values for mailer', () => {
			expect(localConfH.mailer.service).toEqual(MAILER_SERVICE);
			expect(localConfH.mailer.hashedPassword).toEqual(MAILER_ENC_PASS);
			expect(localConfH.mailer.email).toEqual(MAILER_EMAIL);
		});
		it('Should have the config values ConfCrypt', () => {
			expect(localConfH.crypt).toBeTruthy();
			expect(localConfH.crypt.secret).toBeTruthy();
			expect(localConfH.crypt.secret).toEqual(SECRET);
		});
		// this is a test that really belongs in the ecryptor
		// it('Should be able to decrypt the mail password with crypt secret', () => {
		// 	const encryptedMailPass = localConfH.mailer.hashedPassword;
		// 	const locCryDec = new Encryptor(localConfH.crypt);
		// 	const decrypted = locCryDec.decrypt(encryptedMailPass);
		// 	expect(decrypted).toEqual(MAILER_PLAIN_PASS);
		// });
	});
});