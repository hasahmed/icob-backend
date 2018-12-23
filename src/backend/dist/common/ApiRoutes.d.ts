export interface Routes {
    readonly [routeName: string]: string;
}
export interface RouterPaths {
    readonly PATH_PREFIX: string;
    readonly ENDPOINTS: Routes;
}
export declare class AccountRoutes implements RouterPaths {
    readonly PATH_PREFIX = "/account";
    readonly ENDPOINTS: {
        SIGNUP: string;
        VERIFY: string;
        LOGIN: string;
    };
}
declare class InstanceRoutes implements RouterPaths {
    readonly PATH_PREFIX = "/instance";
    readonly ENDPOINTS: {
        ROOT: string;
        GET_BY_ID: string;
        TEST: string;
    };
}
declare class WorkflowRoutes implements RouterPaths {
    readonly PATH_PREFIX = "/workflow";
    readonly ENDPOINTS: {
        ROOT: string;
        GET_BY_ID: string;
    };
}
export declare const INSTANCE_ROUTES: InstanceRoutes;
declare class StepRoutes implements RouterPaths {
    readonly PATH_PREFIX: string;
    readonly ENDPOINTS: {
        ROOT: string;
        TEST: string;
    };
}
export declare const ACCOUNT_ROUTES: AccountRoutes;
export declare const STEP_ROUTES: StepRoutes;
export declare const WORKFLOW_ROUTES: WorkflowRoutes;
export {};
