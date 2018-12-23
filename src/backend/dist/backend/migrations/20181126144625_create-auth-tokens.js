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
const schema_1 = require("../db/schema");
exports.up = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return (knex
            .schema
            .createTable(schema_1.AuthTokenSchema.tableName, (table) => {
            table.string(schema_1.AuthTokenSchema.token);
            table.integer(schema_1.AuthTokenSchema.created).unsigned();
        }));
    });
};
exports.down = function (knex) {
    return __awaiter(this, void 0, void 0, function* () {
        return knex.schema.dropTable(schema_1.AuthTokenSchema.tableName);
    });
};
//# sourceMappingURL=20181126144625_create-auth-tokens.js.map