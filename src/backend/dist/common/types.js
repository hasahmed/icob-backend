"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidIdError extends Error {
    constructor() {
        super("The item with the given ID was not found in the database");
        this.name = "InvalidIdError";
    }
}
exports.InvalidIdError = InvalidIdError;
__export(require("../backend/model"));
//# sourceMappingURL=types.js.map