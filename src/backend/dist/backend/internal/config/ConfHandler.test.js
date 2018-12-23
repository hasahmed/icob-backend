"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const path = require("path");
const ConfHandler_1 = require("./ConfHandler");
const ConfAll_1 = require("./ConfAll");
const ConfMailer_1 = require("./ConfMailer");
const Encryptor_1 = require("../Encryptor");
const ConfCrypt_1 = require("./ConfCrypt");
const testConfPath = path.join(process.cwd(), 'src', 'backend', 'tmp', 'testConf.json.tmp');
const SECRET = 'verySecretSecret';
const confCrypt = new ConfCrypt_1.ConfCrypt(SECRET);
const crydec = new Encryptor_1.Encryptor(confCrypt);
const MAILER_SERVICE = 'gmail';
const MAILER_EMAIL = 'hello@goodbye.com';
const MAILER_PLAIN_PASS = 'aGoodPassword';
const MAILER_ENC_PASS = crydec.encrypt(MAILER_PLAIN_PASS);
const confMailer = new ConfMailer_1.ConfMailer(MAILER_EMAIL, MAILER_ENC_PASS, MAILER_SERVICE);
const confAll = new ConfAll_1.ConfAll(confMailer, confCrypt);
const globalConfH = new ConfHandler_1.ConfigHandler(testConfPath);
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
        let localConfH;
        beforeAll(() => {
            localConfH = new ConfHandler_1.ConfigHandler(testConfPath);
            localConfH.confDelete();
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
    });
});
//# sourceMappingURL=ConfHandler.test.js.map