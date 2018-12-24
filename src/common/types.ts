export class InvalidIdError extends Error {
	constructor(){
		super("The item with the given ID was not found in the database");
		this.name = "InvalidIdError";
	}
}

export * from '../backend/model';