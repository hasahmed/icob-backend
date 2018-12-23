"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_router_1 = require("../api-common/app-router");
const account_controller_1 = require("./account-controller");
const ApiRoutes_1 = require("../../../common/ApiRoutes");
const auth = require("basic-auth");
class AccountCreationError {
    constructor() {
        this.message = 'Unable to create account';
    }
}
exports.AccountCreationError = AccountCreationError;
class AccountRouter extends app_router_1.AppRouter {
    constructor(options = {
        controller: new account_controller_1.AccountController(),
        routerPaths: ApiRoutes_1.ACCOUNT_ROUTES
    }) {
        super(options);
        const cont = this.controller;
        this.router.post(ApiRoutes_1.ACCOUNT_ROUTES.ENDPOINTS.SIGNUP, (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (yield cont.acctExists(req.body))
                res.send(false);
            else
                res.send(yield cont.create(req.body));
        }));
        this.router.post(ApiRoutes_1.ACCOUNT_ROUTES.ENDPOINTS.VERIFY, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield cont.verify(req.body));
            }
            catch (err) {
                res.status(512).send(err);
            }
        }));
        this.router.post(ApiRoutes_1.ACCOUNT_ROUTES.ENDPOINTS.LOGIN, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                res.send(yield cont.verify(req.body));
            }
            catch (err) {
                res.status(512).send(err);
            }
        }));
        const alwaysLogin = false;
        this.router.get('/auth-test', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const authParams = auth(req);
            if (authParams) {
                const validity = yield cont.login({ email: authParams.name, password: authParams.pass });
                if (validity || alwaysLogin) {
                    res.send(true);
                }
                else {
                    res.status(401).send(false);
                }
            }
            else {
                res.status(401).send(false);
            }
        }));
        this.router.post('/zaptest', (req, res) => {
            console.log('/account/test');
            console.log(req.body);
            res.send("OK");
        });
        this.router.get('/beginners', (req, res) => {
            console.log('/beginnings');
        });
        this.router.get('/beginnings', (req, res) => {
            console.log('/beginnings');
            console.log(req.params);
            const begininngs = [
                {
                    id: '123',
                    createdAt: Date.now(),
                    name: 'New Applicant'
                },
                {
                    id: '456',
                    createdAt: Date.now(),
                    name: 'Employee Onboarding'
                }
            ];
            res.send(begininngs);
        });
    }
}
exports.AccountRouter = AccountRouter;
//# sourceMappingURL=account-router.js.map