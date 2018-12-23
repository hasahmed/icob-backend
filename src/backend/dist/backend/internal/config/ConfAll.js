"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfMailer_1 = require("./ConfMailer");
const ConfCrypt_1 = require("./ConfCrypt");
class ConfAll {
    constructor(mailer = new ConfMailer_1.ConfMailer(), crypt = new ConfCrypt_1.ConfCrypt()) {
        this.mailer = mailer;
        this.crypt = crypt;
    }
}
exports.ConfAll = ConfAll;
//# sourceMappingURL=ConfAll.js.map