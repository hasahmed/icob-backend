"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const conf_1 = require("./conf");
const conf_handler_1 = require("./internal/config/conf-handler");
console.log("MAKE SURE YOU HAVE COMPILED BEFORE RUNNING THIS SCRIPT");
const ABS_SQL_DB = path.join('..', '..', 'db', conf_1.DB_NAME);
const conf = new conf_handler_1.ConfigHandler();
const devDbConf = {
    client: 'sqlite3',
    connection: {
        filename: ABS_SQL_DB
    },
    useNullAsDefault: true
};
const prodDbConf = {
    client: 'pg',
    connection: {
        host: conf.db.host + ':' + conf.db.port,
        user: conf.db.username,
        password: conf.db.password,
        database: conf.db.dbName,
    }
};
module.exports = {
    development: devDbConf,
    staging: {
        client: "postgresql",
        connection: prodDbConf,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    },
    production: {
        client: "postgresql",
        connection: prodDbConf,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: "knex_migrations"
        }
    }
};
//# sourceMappingURL=knexfile.js.map