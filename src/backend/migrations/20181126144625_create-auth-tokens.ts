import * as Knex from "knex";
import { AuthTokenSchema } from '../db/schema';

exports.up = async function (knex: Knex): Promise<any> {
	return (
		knex
		.schema
		.createTable(AuthTokenSchema.tableName, (table) => {
			table.string(AuthTokenSchema.token);
			table.integer(AuthTokenSchema.created).unsigned();
		})
	)
};

exports.down = async function (knex: Knex): Promise<any> {
	return knex.schema.dropTable(AuthTokenSchema.tableName);
};
