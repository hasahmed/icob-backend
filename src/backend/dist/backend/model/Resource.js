"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encryptor_1 = require("../internal/encryptor");
class Resource {
    constructor() {
        this.created = Date.now();
        this.id = encryptor_1.Encryptor.newUuid();
    }
    static isValid(schema, inQuestion) {
        if (!inQuestion)
            return false;
        for (const key in schema)
            if (typeof schema[key] !== typeof inQuestion[key] ||
                typeof inQuestion[key] === undefined)
                return false;
        return true;
    }
}
exports.Resource = Resource;
(function (Resource) {
    class CreationParams {
        constructor(params) {
            if (params) {
                for (const key in this) {
                    params[key.toString()] = this[key];
                }
            }
        }
    }
    Resource.CreationParams = CreationParams;
})(Resource = exports.Resource || (exports.Resource = {}));
//# sourceMappingURL=Resource.js.map