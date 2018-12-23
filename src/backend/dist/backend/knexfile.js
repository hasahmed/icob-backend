"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const conf_1 = require("./conf");
console.log("MAKE SURE YOU HAVE COMPILED BEFORE RUNNING THIS SCRIPT");
const ABS_SQL_DB = path.join('..', '..', 'db', conf_1.DB_NAME);
module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: ABS_SQL_DB
        },
        useNullAsDefault: true
    },
    staging: {
        client: "postgresql",
        connection: {
            database: conf_1.DB_NAME,
            user: "username",
            password: "password"
        },
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
        connection: {
            database: conf_1.DB_NAME,
            user: "username",
            password: "password"
        },
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