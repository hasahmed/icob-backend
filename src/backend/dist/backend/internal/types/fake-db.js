"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mem_db_1 = require("./mem-db");
const fake_seed_data_1 = require("./fake-seed-data");
class FakeDb extends mem_db_1.MemDb {
    constructor() {
        super();
        const fsd = new fake_seed_data_1.FakeSeedData();
        fsd.templates.forEach(begT => {
            this.store(begT);
        });
        fsd.beginnings.forEach(beg => {
            this.store(beg);
        });
    }
}
exports.FakeDb = FakeDb;
exports.FAKE_DB = new FakeDb();
//# sourceMappingURL=fake-db.js.map