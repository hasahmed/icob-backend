import * as Knex from "knex";
import { UserSchema } from '../db/schema';

exports.up = async function (knex: Knex): Promise<any> {
	return (
		knex
		.schema
		.createTable(UserSchema.tableName[1]!, (table) => {
			for (const key in UserSchema) {
				if (key === 'tableName') continue;
				table[UserSchema[key][0]](key);
			}
			table.timestamp('created');
			table.increments('id').unsigned;
		})
	);
};

exports.down = async function (knex: Knex): Promise<any> {
	return knex.schema.dropTable(UserSchema.tableName[1]!);
};