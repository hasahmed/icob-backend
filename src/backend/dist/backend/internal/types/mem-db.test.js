"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const mem_db_1 = require("./mem-db");
const model_1 = require("../../model");
const fake_seed_data_1 = require("./fake-seed-data");
const random_data_1 = require("./random-data");
describe('MemDb Tests', () => {
    describe('MemDb Tests', () => {
        it('Should be able to be created', () => {
            const memDb = new mem_db_1.MemDb();
            expect(memDb).toBeTruthy();
        });
        it('Should store valid object and retrieve the object', () => {
            const s = new model_1.Step();
            const memDb = new mem_db_1.MemDb();
            memDb.store(s);
            const ret = memDb.retrieve(s.id);
            expect(ret).toBeTruthy();
            expect(ret).toEqual(s);
        });
        it('Should delete an object that exists', () => {
            const s = new model_1.Step();
            const memDb = new mem_db_1.MemDb();
            memDb.store(s);
            const ret = memDb.retrieve(s.id);
            expect(ret).toBeTruthy();
            expect(ret).toEqual(s);
            const res = memDb.delete(s.id);
            expect(res).toEqual(true);
            expect(memDb.delete(s.id)).toEqual(false);
        });
        it('Should retrieve all things in map', () => {
            const s = new model_1.Workflow();
            const memDb = new mem_db_1.MemDb();
            for (let i = 0; i < 100; i++) {
                memDb.store(new model_1.Workflow());
            }
            memDb.store(s);
            const all = memDb.retrieveAll();
            expect(all.length).toEqual(101);
            const found = all.find((beg) => {
                return beg === s;
            });
            expect(found).toBeTruthy();
            expect(found).toEqual(s);
        });
        it('Should retrieveWhere', () => {
            const beg = new model_1.Instance(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "Katie Ahmed");
            const memDb = new mem_db_1.MemDb();
            for (let i = 0; i < 100; i++) {
                memDb.store(new model_1.Instance(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, random_data_1.RandomData.randomFullName()));
            }
            memDb.store(beg);
            for (let i = 0; i < 100; i++) {
                memDb.store(new model_1.Instance(fake_seed_data_1.BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING, random_data_1.RandomData.randomFullName()));
            }
            const customerBegInsts = memDb.retriveWhere({
                parentTemplateId: fake_seed_data_1.BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING.id
            });
            const employeeBegInsts = memDb.retriveWhere({
                parentTemplateId: fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING.id
            });
            const katieBegInst = memDb.retriveWhere({
                regarding: "Katie Ahmed"
            });
            expect(customerBegInsts.length).toEqual(100);
            expect(employeeBegInsts.length).toEqual(101);
            expect(katieBegInst.length).toEqual(1);
            expect(katieBegInst[0]).toEqual(beg);
        });
    });
});
//# sourceMappingURL=mem-db.test.js.map