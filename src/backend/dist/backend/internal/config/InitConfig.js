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
const prompts = require("prompts");
const ConfAll_1 = require("./ConfAll");
const ConfMailer_1 = require("./ConfMailer");
const conf_1 = require("../../conf");
const Encryptor_1 = require("../Encryptor");
const ConfCrypt_1 = require("./ConfCrypt");
const ConfHandler_1 = require("./ConfHandler");
class InitConfig {
    constructor(confHandler = new ConfHandler_1.ConfigHandler(conf_1.APP_CONF), writeOut = true, injections) {
        this.confHandler = confHandler;
        this.writeOut = writeOut;
        this.injections = injections;
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            const questions = [
                {
                    type: 'password',
                    name: 'cryptSecret',
                    format: (val) => {
                        if (!val)
                            return Encryptor_1.Encryptor.hash(Encryptor_1.Encryptor.randomString());
                        return Encryptor_1.Encryptor.hash(val);
                    },
                    message: 'The secrete for keys to be decrypted against'
                },
                {
                    type: 'text',
                    name: 'mailerEmail',
                    initial: 'customerservice@begin.com',
                    message: `Email customers will recieve emails from when they sign up`
                },
                {
                    type: 'text',
                    name: 'mailerService',
                    initial: 'gmail',
                    message: 'Email service provider of entered email'
                },
                {
                    type: 'password',
                    name: 'mailerPass',
                    format: (val, values) => {
                        return new Encryptor_1.Encryptor(new ConfCrypt_1.ConfCrypt(values.cryptSecret)).encrypt(val);
                    },
                    message: 'Password of given email. (It will be encrypted)'
                },
                {
                    type: 'text',
                    name: 'adminUsername',
                    initial: 'beginadmin',
                    message: 'Username of the application admin'
                },
                {
                    type: 'password',
                    name: 'adminPass',
                    format: (val) => {
                        return Encryptor_1.Encryptor.hash(val);
                    },
                    message: 'Password of the application admin'
                }
            ];
            if (this.injections) {
                prompts.inject(this.injections);
            }
            const answers = yield prompts(questions);
            const outConf = new ConfAll_1.ConfAll(new ConfMailer_1.ConfMailer(answers.mailerEmail, answers.mailerPass), new ConfCrypt_1.ConfCrypt(answers.cryptSecret));
            const jsonOut = JSON.stringify(outConf, null, 2);
            if (this.writeOut) {
                this.confHandler.setConf(outConf);
                this.confHandler.confWrite();
            }
            return jsonOut;
        });
    }
}
exports.InitConfig = InitConfig;
//# sourceMappingURL=InitConfig.js.map