"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const conf_crypt_1 = require("./config/conf-crypt");
const encryptor_1 = require("./encryptor");
describe('Encryptor test', () => {
    const secret = 'aGoodSecret';
    const confCrypt = new conf_crypt_1.ConfCrypt(secret);
    const crydec = new encryptor_1.Encryptor(confCrypt);
    let encrypted;
    it('Should be created', () => {
        expect(crydec).toBeTruthy();
    });
    it('Should encrypt and decrypt', () => {
        encrypted = crydec.encrypt('hello');
        expect(encrypted === 'hello').toEqual(false);
        expect(crydec.decrypt(encrypted) === 'hello').toEqual(true);
    });
    it('Should generate a random string of characters', () => {
        expect(encryptor_1.Encryptor.randomString() === '').toEqual(false);
        expect(encryptor_1.Encryptor.randomString()).toEqual(jasmine.any(String));
    });
    it('Should hash a string', () => {
        const str = 'hello';
        const hashedStr = encryptor_1.Encryptor.hash(str);
        expect(hashedStr === '').toEqual(false);
        expect(hashedStr).toEqual(jasmine.any(String));
    });
    it('Should encrypt the same way reguardless of Encryptor obj', () => {
        const crydec1 = new encryptor_1.Encryptor(confCrypt);
        const crydec2 = new encryptor_1.Encryptor(confCrypt);
        const str = 'hello';
        const enc1 = crydec1.encrypt(str);
        const enc2 = crydec2.encrypt(str);
        expect(enc1).toEqual(enc2);
    });
    it('Should decrypt the same way reguardless of Encryptor obj', () => {
        const crydec1 = new encryptor_1.Encryptor(confCrypt);
        const crydec2 = new encryptor_1.Encryptor(confCrypt);
        const str = 'hello';
        const enc1 = crydec1.encrypt(str);
        const enc2 = crydec2.encrypt(str);
        expect(crydec1.decrypt(enc1)).toEqual(crydec2.decrypt(enc1));
        expect(crydec2.decrypt(enc2)).toEqual(crydec1.decrypt(enc2));
    });
});
//# sourceMappingURL=encryptor.test.js.map