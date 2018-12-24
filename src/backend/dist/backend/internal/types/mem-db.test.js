"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const mem_db_1 = require("./mem-db");
const resource_1 = require("../../model/resource");
class User extends resource_1.Resource {
}
describe('MemDb Tests', () => {
    describe('MemDb Tests', () => {
        it('Should be able to be created', () => {
            const memDb = new mem_db_1.MemDb();
            expect(memDb).toBeTruthy();
        });
        it('Should store valid object and retrieve the object', () => {
            const s = new User();
            const memDb = new mem_db_1.MemDb();
            memDb.store(s);
            const ret = memDb.retrieve(s.id);
            expect(ret).toBeTruthy();
            expect(ret).toEqual(s);
        });
        it('Should delete an object that exists', () => {
            const s = new User();
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
            const s = new User();
            const memDb = new mem_db_1.MemDb();
            for (let i = 0; i < 100; i++) {
                memDb.store(new User());
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
        });
    });
});
//# sourceMappingURL=mem-db.test.js.map