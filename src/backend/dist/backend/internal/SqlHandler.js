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
const knex = require("knex");
const schema_1 = require("../db/schema");
const conf_1 = require("../conf");
class SqlHandler {
    static init() {
        SqlHandler._knexInst = knex({
            client: 'sqlite3',
            connection: {
                filename: conf_1.SQLITE_DB
            },
            useNullAsDefault: true
        });
    }
    static knexInst() {
        if (!this._knexInst) {
            SqlHandler.init();
        }
        return this._knexInst;
    }
    static createAccount(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield SqlHandler.knexInst()(schema_1.UserSchema.tableName[1]).insert(user);
            return true;
        });
    }
    static getUserWhere(where) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield SqlHandler.knexInst()(schema_1.UserSchema.tableName[1]).where(where))[0];
            }
            catch (err) {
                return false;
            }
        });
    }
    static updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return SqlHandler.knexInst()(schema_1.UserSchema.tableName[1])
                    .where(schema_1.UserSchema.id[1], user.id)
                    .update(user);
            }
            catch (err) {
                return false;
            }
        });
    }
}
exports.SqlHandler = SqlHandler;
//# sourceMappingURL=SqlHandler.js.map