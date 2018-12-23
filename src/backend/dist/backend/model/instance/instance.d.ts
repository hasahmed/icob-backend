import { Step } from '../step/step';
import { Resource } from '../Resource';
import { Workflow } from '../workflow/workflow';
export declare class Instance extends Resource {
    parentTemplateId: string;
    parentName: string;
    steps: Step[];
    regarding: string;
    completedSteps: Step[];
    name: string;
    currentStepIndex: number;
    readonly currentStep: Step;
    completeStep(): void;
    onFinish(): void;
    isFinished(): boolean;
    constructor(template?: Workflow, reguarding?: string);
}
