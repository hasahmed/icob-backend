import * as chance from 'chance';
import * as rname from 'random-name';

export class RandomData {

	static randomChar(): string {
		return chance().character({alpha: true, casing: 'lower'});
	}
	static randomName(): string {
		return rname.first();
	}
	static upperFirst(str: string){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	static randomFullName(){
		return rname.first() + " " + rname.last();
	}
	static randomEmail(name?: string) {
		return ((name || this.randomName()) + "@" + rname.place() + '.' + 'com').toLowerCase();
	}

}