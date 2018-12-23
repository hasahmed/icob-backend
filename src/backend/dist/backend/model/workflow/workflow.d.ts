import { Resource } from '../Resource';
import { Step } from '../step/step';
import { Instance } from '../instance/instance';
export declare class Workflow extends Resource {
    name: string;
    steps: Step[];
    children?: Instance[];
    constructor(creationParams?: Workflow.CreationParams);
    static isBeginningTemplate(beg: Workflow | undefined | Workflow[]): beg is Workflow;
    static isBeginningTemplateArray(beg: Workflow | undefined | Workflow[]): beg is Workflow;
}
export declare namespace Workflow {
    class CreationParams extends Resource.CreationParams {
        name: string;
        steps: Step[];
        constructor(params?: Workflow.CreationParams);
    }
}
