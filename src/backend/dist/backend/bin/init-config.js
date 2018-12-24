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
const init_config_1 = require("../internal/config/init-config");
const conf_1 = require("../conf");
(() => __awaiter(this, void 0, void 0, function* () {
    yield new init_config_1.InitConfig().prompt();
    console.log('Confg file written to ' + conf_1.APP_CONF);
}))();
//# sourceMappingURL=init-config.js.map