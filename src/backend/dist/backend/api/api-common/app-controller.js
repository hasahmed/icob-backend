"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../../../common/types");
class AppController {
    constructor(storage) {
        this.storage = storage;
    }
    put(thing) {
        this.storage.store(thing);
    }
    get() {
        return this.storage.retrieveAll();
    }
    getOne(thingId) {
        const ret = this.storage.retrieve(thingId);
        if (ret)
            return ret;
        throw new types_1.InvalidIdError();
    }
    getWhere(where) {
        return this.storage.retriveWhere(where);
    }
    delete(thingId) {
        this.storage.delete(thingId);
    }
}
exports.AppController = AppController;
//# sourceMappingURL=app-controller.js.map