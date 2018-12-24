import * as path from 'path';
/*
Dont import this file
*/
import { DB_NAME, SQLITE_DB } from './conf';
import { ConfigHandler } from './internal/config/conf-handler';

console.log("MAKE SURE YOU HAVE COMPILED BEFORE RUNNING THIS SCRIPT");

// super super stupid reletive path to compiled js because the knex command line
// program to run migrations changes directories so I can no longer user process.cwd()
// to resolve paths
const ABS_SQL_DB =  path.join('..', '..', 'db', DB_NAME);

const conf = new ConfigHandler();
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
