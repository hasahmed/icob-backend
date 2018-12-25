import 'jest';
import * as path from 'path';
import { ConfigHandler } from './conf-handler';
import { ConfAll } from './conf-all';
import { Encryptor } from '../encryptor';
import { ConfCrypt } from './conf-crypt';

const testConfPath = path.join(process.cwd(), 'src', 'backend', 'tmp', 'testConf.json.tmp');

const SECRET = 'verySecretSecret';
const confCrypt = new ConfCrypt(SECRET);
const crydec = new Encryptor(
	confCrypt
);

const confAll = new ConfAll(
	// confCrypt
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
		it('Should have the config values ConfCrypt', () => {
			expect(localConfH.crypt).toBeTruthy();
			expect(localConfH.crypt.secret).toBeTruthy();
			expect(localConfH.crypt.secret).toEqual(SECRET);
		});
	});
});