import { Workflow, Instance } from '../../model';
export declare class FakeSeedData {
    beginnings: Instance[];
    templates: Workflow[];
    constructor();
}
export declare const BEGINNING_TEMPLATES: {
    EMPLOYEE_ONBOARDING: Workflow;
    CUSTOMER_ONBOARDING: Workflow;
};
