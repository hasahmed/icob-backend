export interface Routes {
	readonly [routeName: string]: string;
}

export interface RouterPaths {
	readonly PATH_PREFIX: string;
	readonly ENDPOINTS: Routes;
}
// this is a little bit of a hack to get typescript to give me intellisense,
//but still having routes be an interface
export class AccountRoutes implements RouterPaths {
	readonly PATH_PREFIX = '/account';
	readonly ENDPOINTS = {
		SIGNUP: '/signup',
		VERIFY: '/verify',
		LOGIN: '/login'
	};
}

class InstanceRoutes implements RouterPaths {
	readonly PATH_PREFIX = '/instance';
	readonly ENDPOINTS = {
		ROOT: '/',
		GET_BY_ID: '/:id',
		TEST: '/test'
	};
}
class WorkflowRoutes implements RouterPaths {
	readonly PATH_PREFIX = '/workflow';
	readonly ENDPOINTS = {
		ROOT: '/',
		GET_BY_ID: '/:id',
	};
}

export const INSTANCE_ROUTES = new InstanceRoutes();

class StepRoutes implements RouterPaths {
	readonly PATH_PREFIX = INSTANCE_ROUTES.PATH_PREFIX + '/step';
	readonly ENDPOINTS = {
		ROOT: '/',
		TEST: '/test'
	};
}
export const ACCOUNT_ROUTES = new AccountRoutes();
export const STEP_ROUTES = new StepRoutes();
export const WORKFLOW_ROUTES = new WorkflowRoutes();