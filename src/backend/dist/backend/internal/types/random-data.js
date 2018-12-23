"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chance = require("chance");
const rname = require("random-name");
class RandomData {
    static randomChar() {
        return chance().character({ alpha: true, casing: 'lower' });
    }
    static randomName() {
        return rname.first();
    }
    static upperFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static randomFullName() {
        return rname.first() + " " + rname.last();
    }
    static randomEmail(name) {
        return ((name || this.randomName()) + "@" + rname.place() + '.' + 'com').toLowerCase();
    }
}
exports.RandomData = RandomData;
//# sourceMappingURL=random-data.js.map