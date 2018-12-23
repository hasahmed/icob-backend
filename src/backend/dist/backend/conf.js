"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const os = require("os");
const SQLITE_DB_EXTEND = '-db.sqlite';
const BACKEND_DIR = path.join('src', 'backend');
const CONFIG_EXTEND = '-conf.json';
exports.APP_NAME = 'begin';
exports.APP_CONF_NAME = '.' + exports.APP_NAME + CONFIG_EXTEND;
exports.DB_NAME = exports.APP_NAME + SQLITE_DB_EXTEND;
exports.SQLITE_DB = path.join(process.cwd(), BACKEND_DIR, 'db', exports.DB_NAME);
exports.APP_CONF = path.join(os.homedir(), exports.APP_CONF_NAME);
//# sourceMappingURL=conf.js.map