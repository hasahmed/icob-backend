import { Encryptor } from '../internal/encryptor';

export class Resource {
	public created: number = Date.now();
	public id: string = Encryptor.newUuid();

	// this is to validate that something cast to a CreationParams is actaully a valid instance of it
	// In practice that means JSON coming across the wire. This should be able to be removed
	// when application-wide JSON validation is in place

	// new question. Should it be accepted if falsey things are passed in as properties?
	// are we checking to see if its something we want to store in our database, or are 
	// we just checking to see if its the correct shape?

	// I think the answer is that it depends. We want REQUIRED fields to not be falsey,
	// but we want them to be there either way. For now we'll leave it the way it is,
	// but it might be a good idea to come back and change it. It seems like it would
	// be better to reject anything falsey
	public static isValid(schema: Resource.CreationParams, inQuestion: any): boolean {
		if (!inQuestion) return false;
		for (const key in schema)
			if (
				typeof schema[key] !== typeof inQuestion[key] ||
				typeof inQuestion[key] === undefined
			) return false;
		return true;
	}
}

export namespace Resource {
	export class CreationParams {
		constructor(params?: Resource.CreationParams){
			if (params){
				for (const key in this){
					params[key.toString()] = this[key];
				}
			}
		}
	}
}