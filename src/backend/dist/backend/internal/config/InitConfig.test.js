"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const path = require("path");
const InitConfig_1 = require("./InitConfig");
const ConfMailer_1 = require("./ConfMailer");
const ConfCrypt_1 = require("./ConfCrypt");
const Encryptor_1 = require("../Encryptor");
const ConfHandler_1 = require("./ConfHandler");
const testInitConfigPath = path.join(__dirname, 'test-conf.json');
const injectionObj = {
    cryptSecret: 'dontTell',
    mailerEmail: 'hasan@gmail.com',
    mailerService: 'gmail',
    mailerPass: 'aGoodPassword',
    adminUsername: 'beginAdmin',
    adminPass: 'aGoodPassword'
};
const confH = new ConfHandler_1.ConfigHandler(testInitConfigPath);
let ic;
let jsonIn;
const confMailerKey = 'mailer';
const confCryptKey = 'crypt';
describe('InitConfig tests', () => {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        ic = new InitConfig_1.InitConfig(confH, true, injectionObj);
        jsonIn = JSON.parse(yield ic.prompt());
    }));
    afterEach(() => {
        confH['confDelete']();
    });
    it('Should should return an object', () => __awaiter(this, void 0, void 0, function* () {
        expect(jsonIn).toBeTruthy();
    }));
    it('should have all of the mailer properties', () => {
        expect(jsonIn[confMailerKey]).toBeTruthy();
        for (const key in new ConfMailer_1.ConfMailer()) {
            expect(jsonIn[confMailerKey][key]).toBeTruthy();
        }
    });
    it('Should have all of the confCrypt properties', () => {
        expect(jsonIn[confCryptKey]).toBeTruthy();
        for (const key in new ConfCrypt_1.ConfCrypt()) {
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
        const decryptor = new Encryptor_1.Encryptor(new ConfCrypt_1.ConfCrypt(encSecret));
        const decPass = decryptor.decrypt(encPass);
        expect(decryptor).toBeTruthy();
        expect(encPass === plainPass).toEqual(false);
        expect(decPass).toEqual(plainPass);
    });
    it('Should have written the file to the correct path', () => {
        expect(confH['confExists']()).toEqual(true);
    });
});
//# sourceMappingURL=InitConfig.test.js.map