"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const MailHandler_1 = require("./MailHandler");
const mh = new MailHandler_1.MailHandler();
describe('MailHandler tests', () => {
    it('Should create an istance of mailHandler', () => {
        expect(mh).toBeTruthy();
    });
    it('Should send an email', () => {
    });
});
//# sourceMappingURL=MailHandler.test.js.map