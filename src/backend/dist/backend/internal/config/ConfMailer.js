"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfMailer {
    constructor(email = 'test@test.com', hashedPassword = 'testPassword', service = 'gmail') {
        this.email = email;
        this.hashedPassword = hashedPassword;
        this.service = service;
    }
}
exports.ConfMailer = ConfMailer;
//# sourceMappingURL=ConfMailer.js.map