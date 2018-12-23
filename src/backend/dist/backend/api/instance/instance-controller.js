"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_controller_1 = require("../api-common/app-controller");
const model_1 = require("../../model");
const types_1 = require("../../internal/types");
const fake_seed_data_1 = require("../../internal/types/fake-seed-data");
class InstanceController extends app_controller_1.AppController {
    constructor(storage = new types_1.MemDb()) {
        super(storage);
    }
    seed() {
        const fsd = new fake_seed_data_1.FakeSeedData();
        fsd.beginnings.forEach(beg => {
            this.storage.store(beg);
        });
    }
    create(template, reguarding) {
        const beg = new model_1.Instance(template, reguarding);
        this.storage.store(beg);
        return beg.id;
    }
}
exports.InstanceController = InstanceController;
//# sourceMappingURL=instance-controller.js.map