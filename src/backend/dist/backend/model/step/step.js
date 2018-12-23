"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../Resource");
const types_1 = require("../../../common/types");
class Step extends Resource_1.Resource {
    constructor(creationParams = new Step.CreationParams()) {
        super();
        this.name = '';
        this.responsible = '';
        this.nudges = new Set();
        this.completed = false;
        this.actions = {};
        this.nudges = new Set(creationParams.nudges);
        delete creationParams.nudges;
        Object.assign(this, creationParams);
        this.nudges.add(types_1.Nudge.IN_APP);
    }
    toJSON() {
        return Object.assign({}, this, { nudges: Array.from(this.nudges) });
    }
}
exports.Step = Step;
(function (Step) {
    class CreationParams extends Resource_1.Resource.CreationParams {
        constructor(params) {
            super(params);
            this.name = '';
            this.responsible = '';
            this.nudges = [];
        }
    }
    Step.CreationParams = CreationParams;
})(Step = exports.Step || (exports.Step = {}));
//# sourceMappingURL=step.js.map