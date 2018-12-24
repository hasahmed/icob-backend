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
const sql_handler_1 = require("./sql-handler");
const schema_1 = require("../db/schema");
const model_1 = require("../model");
class AccountManger {
    constructor() {
        this.tmpAuthKeyTable = new Map();
    }
    acctCreate(acctParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new model_1.User(acctParams.email, acctParams.firstName, acctParams.lastName, acctParams.password);
            this.tmpAuthKeyTable.set(acctParams.email, user.tmpAuthHash);
            yield sql_handler_1.SqlHandler.createAccount(user);
            return true;
        });
    }
    acctVerify(authKey) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield sql_handler_1.SqlHandler.getUserWhere({
                [`${schema_1.UserSchema.tmpAuthHash[1]}`]: authKey
            });
            if (user) {
                user.tmpAuthHash = '';
                user.activated = true;
                sql_handler_1.SqlHandler.updateUser(user);
            }
            else {
                return false;
            }
            return true;
        });
    }
}
exports.AccountManger = AccountManger;
//# sourceMappingURL=AccountManager.js.map