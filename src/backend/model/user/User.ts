import { Encryptor } from '../../internal/encryptor';
import { Resource } from '../resource';

export class User extends Resource {
	public activated: boolean = false;
	public tmpAuthHash: string = Encryptor.newUuid();
	public created: number = Date.now();
	public id: string = Encryptor.newUuid();

	public constructor(
		public email: string,
		public firstName: string,
		public lastName: string,
		public password: string,
	){
		super();
		this.password = Encryptor.hash(this.password!);
	}
}
// this internal class is used for verifying parameters
// coming in from frontend. And it is namespaced so it looks like its an
// internal class of User. But it can't actually be because then we couldn't use it as a type of parameter
export namespace User {
	export class CreationParams extends Resource.CreationParams {
		public email: string='';
		public firstName: string='';
		public lastName: string='';
		public password: string='';

		public constructor(params?: User.CreationParams){
			super(params);
		}
	}
}