"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemDb {
    constructor() {
        this.db = new Map();
    }
    store(thing) {
        this.db.set(thing.id, thing);
    }
    retrieve(thingId) {
        return this.db.get(thingId);
    }
    retrieveAll() {
        const ret = [];
        this.db.forEach((value) => {
            ret.push(value);
        });
        return ret;
    }
    retriveWhere(where) {
        return this.retrieveAll().filter(ele => {
            for (const prop in where) {
                if (!(ele[prop] === where[prop]))
                    return false;
            }
            return true;
        });
    }
    delete(thingId) {
        return this.db.delete(thingId);
    }
}
exports.MemDb = MemDb;
//# sourceMappingURL=mem-db.js.map