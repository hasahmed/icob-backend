import 'jest';
import * as path from 'path';
import { PromptConfig } from './prompt-config';
import { ConfCrypt } from './conf-crypt';
import { Encryptor } from '../encryptor';
import { ConfigHandler } from './conf-handler';

const testInitConfigPath = path.join(__dirname, 'test-conf.json');
const injectionObj = {
};
const confH = new ConfigHandler(testInitConfigPath);
let ic: PromptConfig;
let jsonIn: Object;


describe('InitConfig tests', () => {
	beforeEach(async () => {
		ic = new PromptConfig(confH, true, injectionObj);
		jsonIn = JSON.parse(await ic.prompt());
	});
	afterEach(() => {
		confH['confDelete']();
	});
	it('Should should return an object', async () => {
		expect(jsonIn).toBeTruthy();
	});
});