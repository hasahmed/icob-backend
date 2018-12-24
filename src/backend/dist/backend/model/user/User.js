"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encryptor_1 = require("../../internal/encryptor");
const resource_1 = require("../resource");
class User extends resource_1.Resource {
    constructor(email, firstName, lastName, password) {
        super();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.activated = false;
        this.tmpAuthHash = encryptor_1.Encryptor.newUuid();
        this.created = Date.now();
        this.id = encryptor_1.Encryptor.newUuid();
        this.password = encryptor_1.Encryptor.hash(this.password);
    }
}
exports.User = User;
(function (User) {
    class CreationParams extends resource_1.Resource.CreationParams {
        constructor(params) {
            super(params);
            this.email = '';
            this.firstName = '';
            this.lastName = '';
            this.password = '';
        }
    }
    User.CreationParams = CreationParams;
})(User = exports.User || (exports.User = {}));
//# sourceMappingURL=User.js.map