import 'jest';

import { MemDb } from './mem-db';
import { Resource } from '../../model/resource';

class User extends Resource {

}

describe('MemDb Tests', () => {
	// describe('MemDb Tests', () => {
	// 	it('Should be able to be created', () => {
	// 		const memDb = new MemDb<User>();
	// 		expect(memDb).toBeTruthy();
	// 	});
	// 	it('Should store valid object and retrieve the object', () => {
	// 		const s = new User();
	// 		const memDb = new MemDb<User>();
	// 		memDb.store(s);
	// 		const ret = memDb.retrieve(s.id);
	// 		expect(ret).toBeTruthy();
	// 		expect(ret).toEqual(s);
	// 	});
	// 	it('Should delete an object that exists', () => {
	// 		const s = new User();
	// 		const memDb = new MemDb<User>();
	// 		memDb.store(s);
	// 		const ret = memDb.retrieve(s.id);
	// 		expect(ret).toBeTruthy();
	// 		expect(ret).toEqual(s);
	// 		const res = memDb.delete(s.id);
	// 		expect(res).toEqual(true);
	// 		expect(memDb.delete(s.id)).toEqual(false);
	// 	});
	// 	it('Should retrieve all things in map', () => {
	// 		const s = new User();
	// 		const memDb = new MemDb<User>();
	// 		for(let i = 0; i < 100; i++) {
	// 			memDb.store(new User());
	// 		}
	// 		memDb.store(s);
	// 		const all = memDb.retrieveAll();
	// 		expect(all.length).toEqual(101);
	// 		const found = all.find((beg) => {
	// 			return beg === s;
	// 		});
	// 		expect(found).toBeTruthy();
	// 		expect(found).toEqual(s);
	// 	});
	// 	it('Should retrieveWhere', () => {
	// 		// const beg = new Instance(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "Katie Ahmed");
	// 		// const memDb = new MemDb<Workflow>();
	// 		// for(let i = 0; i < 100; i++) {
	// 		// 	memDb.store(new Instance(BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, RandomData.randomFullName()));
	// 		// }
	// 		// memDb.store(beg);
	// 		// for(let i = 0; i < 100; i++) {
	// 		// 	memDb.store(new Instance(BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING, RandomData.randomFullName()));
	// 		// }
	// 		// const customerBegInsts = memDb.retriveWhere({
	// 		// 	parentTemplateId: BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING.id
	// 		// });
	// 		// const employeeBegInsts = memDb.retriveWhere({
	// 		// 	parentTemplateId: BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING.id
	// 		// });
	// 		// const katieBegInst = memDb.retriveWhere({
	// 		// 	regarding: "Katie Ahmed"
	// 		// });


	// 		// expect(customerBegInsts.length).toEqual(100);
	// 		// expect(employeeBegInsts.length).toEqual(101);
	// 		// expect(katieBegInst.length).toEqual(1);
	// 		// expect(katieBegInst[0]).toEqual(beg);
	// 	});
	// });
});