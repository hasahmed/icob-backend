export interface Routes {
	readonly [routeName: string]: string;
}

export interface RouterPaths {
	readonly PATH_PREFIX: string;
	readonly ENDPOINTS: Routes;
}
// this is a little bit of a hack to get typescript to give me intellisense,
//but still having routes be an interface
export class UserRoutes implements RouterPaths {
	readonly PATH_PREFIX = '/user';
	readonly ENDPOINTS = {
		INDEX: '/',
		LOGIN: '/login'
	};
}
export const USER_ROUTES = new UserRoutes();