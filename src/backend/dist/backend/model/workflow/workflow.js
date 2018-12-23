"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resource_1 = require("../Resource");
class Workflow extends Resource_1.Resource {
    constructor(creationParams = new Workflow.CreationParams()) {
        super();
        this.name = '';
        this.steps = [];
        Object.assign(this, creationParams);
    }
    static isBeginningTemplate(beg) {
        return !!beg && !this.isBeginningTemplateArray(beg);
    }
    static isBeginningTemplateArray(beg) {
        if (beg) {
            if (beg.length !== undefined)
                return true;
        }
        return false;
    }
}
exports.Workflow = Workflow;
(function (Workflow) {
    class CreationParams extends Resource_1.Resource.CreationParams {
        constructor(params) {
            super(params);
            this.name = '';
            this.steps = [];
        }
    }
    Workflow.CreationParams = CreationParams;
})(Workflow = exports.Workflow || (exports.Workflow = {}));
//# sourceMappingURL=workflow.js.map