"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = require("../api-common/app-controller");
const model_1 = require("../../model");
const Resource_1 = require("../../model/Resource");
const types_1 = require("../../internal/types");
class StepController extends app_controller_1.AppController {
    constructor(storage = new types_1.MemDb()) {
        super(storage);
    }
    create(stepCP) {
        if (!stepCP)
            return false;
        if (!Resource_1.Resource.isValid(new model_1.Step.CreationParams(), stepCP))
            return false;
        const step = new model_1.Step(stepCP);
        this.storage.store(step);
        return step.id;
    }
}
exports.StepController = StepController;
//# sourceMappingURL=step-controller.js.map