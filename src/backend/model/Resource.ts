export class Resource {

	id?: number;

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