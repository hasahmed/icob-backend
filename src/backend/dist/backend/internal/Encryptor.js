"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const conf_crypt_1 = require("./config/conf-crypt");
const uuidv4 = require("uuid/v4");
class Encryptor {
    constructor(confCrypt = new conf_crypt_1.ConfCrypt()) {
        this.confCrypt = confCrypt;
        this.ALGO = 'aes-256-cbc';
    }
    encrypt(str) {
        const cipher = crypto.createCipher(this.ALGO, this.confCrypt.secret);
        const enc = cipher.update(str, 'utf8', 'hex') + cipher.final('hex');
        return enc;
    }
    decrypt(encryptedStr) {
        const decipher = crypto.createDecipher(this.ALGO, this.confCrypt.secret);
        const dec = decipher.update(encryptedStr, 'hex', 'utf8') + decipher.final();
        return dec;
    }
    static hash(str) {
        return crypto.createHash('sha512').update(str).digest('hex');
    }
    static randomString() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    static newUuid() {
        return uuidv4();
    }
}
exports.Encryptor = Encryptor;
//# sourceMappingURL=Encryptor.js.map