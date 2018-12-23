"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Encryptor_1 = require("../../internal/Encryptor");
const Resource_1 = require("../Resource");
class User extends Resource_1.Resource {
    constructor(email, firstName, lastName, password) {
        super();
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.activated = false;
        this.tmpAuthHash = Encryptor_1.Encryptor.newUuid();
        this.created = Date.now();
        this.id = Encryptor_1.Encryptor.newUuid();
        this.password = Encryptor_1.Encryptor.hash(this.password);
    }
}
exports.User = User;
(function (User) {
    class CreationParams extends Resource_1.Resource.CreationParams {
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