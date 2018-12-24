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
const app_controller_1 = require("../api-common/app-controller");
const AccountManager_1 = require("../../internal/AccountManager");
const sql_handler_1 = require("../../internal/sql-handler");
const model_1 = require("../../model");
const Encryptor_1 = require("../../internal/Encryptor");
const Resource_1 = require("../../model/Resource");
const types_1 = require("../../internal/types");
class AccountController extends app_controller_1.AppController {
    constructor(acctManager = new AccountManager_1.AccountManger(), storage = new types_1.MemDb()) {
        super(storage);
        this.acctManager = acctManager;
    }
    create(accountParams) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Resource_1.Resource.isValid(new model_1.User.CreationParams(), accountParams)
                && !(yield this.acctExists(accountParams))) {
                yield this.acctManager.acctCreate(accountParams);
                return true;
            }
            else {
                throw new Error('Missing Account Creation Parameters');
            }
        });
    }
    login(loginParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = loginParams;
            const user = yield sql_handler_1.SqlHandler.getUserWhere({ email });
            if (user) {
                if (loginParams.email === user.email &&
                    user.password === Encryptor_1.Encryptor.hash(loginParams.password)) {
                    return 'this string should be replaced with a real auth token implementation';
                }
            }
            return false;
        });
    }
    verify(reqQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            if (reqQuery && reqQuery.verifCode) {
                return yield this.acctManager.acctVerify(reqQuery.verifCode);
            }
            else {
                throw new Error('No account verification code provided');
            }
        });
    }
    acctExists(acctParams) {
        return __awaiter(this, void 0, void 0, function* () {
            return !!(yield sql_handler_1.SqlHandler.getUserWhere({ email: acctParams.email }));
        });
    }
}
exports.AccountController = AccountController;
//# sourceMappingURL=account-controller.js.map