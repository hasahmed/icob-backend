"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const ConfAll_1 = require("./ConfAll");
const conf_1 = require("../../conf");
class ConfigHandler {
    constructor(confPath = conf_1.APP_CONF) {
        this.confPath = confPath;
        this.confAll = new ConfAll_1.ConfAll();
        this.init();
    }
    setConf(newConf) {
        this.confAll = newConf;
    }
    get mailer() {
        return this.confAll.mailer;
    }
    get crypt() {
        return this.confAll.crypt;
    }
    confWrite() {
        fs.writeFileSync(this.confPath, JSON.stringify(this.confAll, null, 2));
    }
    confExists() {
        return fs.existsSync(this.confPath);
    }
    confDelete() {
        if (this.confExists())
            fs.unlinkSync(this.confPath);
    }
    confRead() {
        return JSON.parse(fs.readFileSync(this.confPath, 'utf8'));
    }
    init() {
        if (this.confExists()) {
            const defaultConf = new ConfAll_1.ConfAll();
            const conf = this.confRead();
            ConfigHandler.copyPresent(defaultConf, conf);
            this.confAll = defaultConf;
        }
        else {
            this.confAll = new ConfAll_1.ConfAll();
        }
    }
}
ConfigHandler.copyPresent = (retConf, rawConf) => {
    for (const key in rawConf) {
        if (key in rawConf) {
            if (typeof rawConf[key] === 'object')
                ConfigHandler.copyPresent(retConf[key], rawConf[key]);
            else
                retConf[key] = rawConf[key];
        }
    }
};
exports.ConfigHandler = ConfigHandler;
//# sourceMappingURL=ConfHandler.js.map