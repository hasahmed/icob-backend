"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const Encryptor_1 = require("../../internal/Encryptor");
const model_1 = require("../../model");
const account_controller_1 = require("./account-controller");
const AccountManager_1 = require("../../internal/AccountManager");
const acctCont = new account_controller_1.AccountController(new AccountManager_1.AccountManger());
const loginParams = {
    email: "hello@google.com",
    password: "goodPassword",
};
const returnedUser = new model_1.User('hello@gmail.com', 'AFirstName', 'ALastName', Encryptor_1.Encryptor.hash('aGoodPassword'));
describe('Account.Controller tests', () => {
    it('Should be created successfully', () => {
        expect(acctCont).toBeTruthy();
    });
});
//# sourceMappingURL=account-controller.test.js.map