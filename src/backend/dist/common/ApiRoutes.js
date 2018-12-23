"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountRoutes {
    constructor() {
        this.PATH_PREFIX = '/account';
        this.ENDPOINTS = {
            SIGNUP: '/signup',
            VERIFY: '/verify',
            LOGIN: '/login'
        };
    }
}
exports.AccountRoutes = AccountRoutes;
class InstanceRoutes {
    constructor() {
        this.PATH_PREFIX = '/instance';
        this.ENDPOINTS = {
            ROOT: '/',
            GET_BY_ID: '/:id',
            TEST: '/test'
        };
    }
}
class WorkflowRoutes {
    constructor() {
        this.PATH_PREFIX = '/workflow';
        this.ENDPOINTS = {
            ROOT: '/',
            GET_BY_ID: '/:id',
        };
    }
}
exports.INSTANCE_ROUTES = new InstanceRoutes();
class StepRoutes {
    constructor() {
        this.PATH_PREFIX = exports.INSTANCE_ROUTES.PATH_PREFIX + '/step';
        this.ENDPOINTS = {
            ROOT: '/',
            TEST: '/test'
        };
    }
}
exports.ACCOUNT_ROUTES = new AccountRoutes();
exports.STEP_ROUTES = new StepRoutes();
exports.WORKFLOW_ROUTES = new WorkflowRoutes();
//# sourceMappingURL=ApiRoutes.js.map