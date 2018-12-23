import * as path from 'path';
/*
Dont import this file
*/
import { DB_NAME } from './conf';

console.log("MAKE SURE YOU HAVE COMPILED BEFORE RUNNING THIS SCRIPT");

// super super stupid reletive path to compiled js because the knex command line
// program to run migrations changes directories so I can no longer user process.cwd()
// to resolve paths
const ABS_SQL_DB =  path.join('..', '..', 'db', DB_NAME);



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
      database: DB_NAME,
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
      database: DB_NAME,
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
