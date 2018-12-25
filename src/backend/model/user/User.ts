import { Resource } from '../resource';
import { Encryptor } from '../../internal/encryptor';

export class User extends Resource {
		public username: string=''; // required
		public password: string=''; // required
		public firstName: string='';
		public lastName: string='';

	public constructor(
		creationParams: User.CreationParams=new User.CreationParams()
	){
		super();
		Object.assign(this, creationParams);
		this.password = Encryptor.hash(this.password);
	}
}
export namespace User {
	export class CreationParams extends Resource.CreationParams {
		public username: string='';
		public password: string='';
		public firstName?: string='';
		public lastName?: string='';

		public constructor(params?: User.CreationParams){
			super(params);
		}
	}
}