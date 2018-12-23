"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../Resource");
const workflow_1 = require("../workflow/workflow");
class Instance extends Resource_1.Resource {
    constructor(template = new workflow_1.Workflow(), reguarding = '') {
        super();
        this.parentTemplateId = '';
        this.parentName = '';
        this.steps = [];
        this.regarding = '';
        this.completedSteps = [];
        this.name = '';
        this.currentStepIndex = 0;
        this.steps = template.steps.slice();
        this.regarding = reguarding;
        this.parentTemplateId = template.id;
        const tmpName = template.name + '_' + 'instance' + '_' + this.regarding;
        this.name = tmpName.replace(/ /g, '_');
        this.parentName = template.name;
    }
    get currentStep() {
        return this.steps[this.currentStepIndex];
    }
    completeStep() {
        if (this.isFinished())
            return;
        this.completedSteps.push(this.steps[this.currentStepIndex]);
        this.currentStepIndex++;
        if (this.isFinished()) {
            this.onFinish();
            return;
        }
    }
    onFinish() {
    }
    isFinished() {
        return this.completedSteps.length === this.steps.length;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=instance.js.map