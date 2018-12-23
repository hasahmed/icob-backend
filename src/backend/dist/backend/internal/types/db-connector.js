"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DbConnector {
    constructor(db, ctor) {
        this.db = db;
        this.ctor = ctor;
    }
    store(beg) {
        this.db.store(beg);
    }
    retrieve(begId) {
        const ret = this.db.retrieve(begId);
        if (ret instanceof this.ctor)
            return ret;
        else
            return;
    }
    retrieveAll() {
        return this.db.retrieveAll().filter(thing => thing instanceof this.ctor);
    }
    retriveWhere(where) {
        return this.retrieveAll().filter(beg => {
            for (const prop in where) {
                if (beg[prop] !== where[prop])
                    return false;
            }
            return true;
        });
    }
    delete(begId) {
        return this.db.delete(begId);
    }
}
exports.DbConnector = DbConnector;
//# sourceMappingURL=db-connector.js.map