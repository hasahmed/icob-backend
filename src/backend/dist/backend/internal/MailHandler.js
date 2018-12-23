"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const ConfHandler_1 = require("./config/ConfHandler");
const Encryptor_1 = require("./Encryptor");
class MailHandler {
    constructor(confMailer = new ConfHandler_1.ConfigHandler().mailer, crydec = new Encryptor_1.Encryptor(new ConfHandler_1.ConfigHandler().crypt)) {
        this.confMailer = confMailer;
        this.crydec = crydec;
        this.transporter = nodemailer.createTransport({
            service: this.confMailer.service,
            auth: {
                user: this.confMailer.email,
                pass: this.crydec.decrypt(this.confMailer.hashedPassword)
            }
        });
    }
    sendMail(mailOptions) {
        const mo = Object.assign({ from: this.confMailer.email }, mailOptions);
        this.transporter.sendMail(mo, (err, info) => {
            console.log(err);
            console.log(info);
        });
    }
}
exports.MailHandler = MailHandler;
//# sourceMappingURL=MailHandler.js.map