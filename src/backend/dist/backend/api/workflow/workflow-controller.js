"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = require("../api-common/app-controller");
const model_1 = require("../../model");
const types_1 = require("../../internal/types");
const Resource_1 = require("../../model/Resource");
const instance_controller_1 = require("../instance/instance-controller");
class WorkflowController extends app_controller_1.AppController {
    constructor(storage = new types_1.MemDb(), begCont = new instance_controller_1.InstanceController()) {
        super(storage);
        this.begCont = begCont;
    }
    create(begTCp) {
        if (!Resource_1.Resource.isValid(new model_1.Workflow.CreationParams(), begTCp))
            throw new Error('InvalidParameterError');
        const begT = new model_1.Workflow(begTCp);
        this.storage.store(begT);
        return begT.id;
    }
    get() {
        const all = super.get();
        return all.map(wrk => {
            wrk.children = undefined;
            return wrk;
        });
    }
    getWithChildren(begTId) {
        const beg = this.getOne(begTId);
        const children = this.begCont.getWhere({
            parentTemplateId: beg.id
        });
        beg.children = children;
        return beg;
    }
    getAllWithChildren() {
        return this.storage.retrieveAll().map(begT => {
            const begTWChildren = this.getWithChildren(begT.id);
            return begTWChildren;
        });
    }
}
exports.WorkflowController = WorkflowController;
//# sourceMappingURL=workflow-controller.js.map