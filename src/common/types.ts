import { Workflow, Instance } from '../backend/model';

export enum Nudge {
	EMAIL = 'email',
	SMS = 'sms',
	IN_APP = 'in-app'
}
export class InvalidIdError extends Error {
	constructor(){
		super("The item with the given ID was not found in the database");
		this.name = "InvalidIdError";
	}
}

export * from '../backend/model';