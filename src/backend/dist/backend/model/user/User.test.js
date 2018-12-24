"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const User_1 = require("./User");
const resource_1 = require("../resource");
describe('User tests', () => {
    const userCreationParamSchema = new User_1.User.CreationParams();
    const email = 'hello@good.com';
    const firstName = 'Hasan';
    const lastName = 'Ahmed';
    const password = 'whazzup';
    const user = new User_1.User(email, firstName, lastName, password);
    it('Should be created', () => {
        expect(user).toBeTruthy();
    });
    it('Should have a hashed password', () => {
        expect(user.password === password).toEqual(false);
        expect(user.password === '').toEqual(false);
        expect(user.password.length).toBeGreaterThan(0);
    });
    it('Should have a tmpAuthHash', () => {
        expect(user.tmpAuthHash === '').toEqual(false);
        expect(user.tmpAuthHash).toEqual(jasmine.any(String));
        expect(user.tmpAuthHash.length).toBeGreaterThan(0);
    });
    it('Should have a date property that is slightly less than now', () => {
        expect(user.created).toBeGreaterThan(Date.now() - 100);
    });
    it('Should have a hashed string as a value', () => {
        expect(user.id.length).toBeGreaterThan(0);
        expect(user.id).toEqual(jasmine.any(String));
    });
    describe('User.CreationParams', () => {
        const ucp = new User_1.User.CreationParams();
        it('Should have all falsey values by default', () => {
            for (const key in ucp) {
                expect(ucp[key]).toBeFalsy();
            }
        });
        describe('User.CreationParams.isValid', () => {
            it('Should return valid when params are empty, but properties are there', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, ucp)).toEqual(true);
            });
            it('Should be false when empty object is passed in', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {})).toEqual(false);
            });
            it('Should be true when valid params object is passed in', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    firstName,
                    lastName,
                    password
                })).toEqual(true);
            });
            it('Should be false when email is missing', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    firstName,
                    lastName,
                    password
                })).toEqual(false);
            });
            it('Should be false when firstName is missing', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    lastName,
                    password
                })).toEqual(false);
            });
            it('Should be false when lastName is missing', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    firstName,
                    password
                })).toEqual(false);
            });
            it('Should be false when password is missing', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    firstName,
                    lastName,
                })).toEqual(false);
            });
            it('Should be false when email parameter type is incorrect', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email: 10,
                    firstName,
                    lastName,
                    password
                })).toEqual(false);
            });
            it('Should be false when firstName parameter type is incorrect', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    firstName: true,
                    lastName,
                    password
                })).toEqual(false);
            });
            it('Should be false when lastName parameter type is incorrect', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    firstName,
                    lastName: 3.14,
                    password
                })).toEqual(false);
            });
            it('Should be false when password parameter type is incorrect', () => {
                expect(resource_1.Resource.isValid(userCreationParamSchema, {
                    email,
                    firstName,
                    lastName,
                    password: undefined
                })).toEqual(false);
            });
        });
        describe('User.CreationParams, construction tests', () => {
            it('Should be able to be created', () => {
                expect(new User_1.User.CreationParams()).toBeTruthy();
            });
            it('Should be valid with parameters assigned', () => {
                const params = new User_1.User.CreationParams({
                    email: "Hello",
                    firstName: "whatsup",
                    lastName: "heya",
                    password: "whwhwhhw",
                });
                expect(params).toBeTruthy();
            });
        });
    });
});
//# sourceMappingURL=User.test.js.map