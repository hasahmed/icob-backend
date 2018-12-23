"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chance = require("chance");
const model_1 = require("../../model");
const types_1 = require("../../../common/types");
const random_data_1 = require("./random-data");
class FakeSeedData {
    constructor() {
        this.beginnings = [];
        this.templates = [];
        for (let i = 0; i < 5; i++) {
            const begInst = new model_1.Instance(exports.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, random_data_1.RandomData.randomFullName());
            this.beginnings.push(begInst);
            for (let i = 0; i < chance().natural({ min: 0, max: begInst.steps.length - 1 }); i++)
                begInst.completeStep();
            this.beginnings.push(begInst);
        }
        for (let i = 0; i < 5; i++) {
            const begInst = new model_1.Instance(exports.BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING, random_data_1.RandomData.randomFullName());
            for (let i = 0; i < chance().natural({ min: 0, max: begInst.steps.length - 1 }); i++)
                begInst.completeStep();
            this.beginnings.push(begInst);
        }
        this.templates.push(exports.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, exports.BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING);
    }
}
exports.FakeSeedData = FakeSeedData;
exports.BEGINNING_TEMPLATES = {
    EMPLOYEE_ONBOARDING: new model_1.Workflow({
        name: "Employee Onboarding",
        steps: [
            new model_1.Step({
                name: "NDA & Non-Compete",
                nudges: [types_1.Nudge.EMAIL],
                responsible: "tanja@periodic.is"
            }),
            new model_1.Step({
                name: "Benefits Enrollment",
                nudges: [types_1.Nudge.EMAIL],
                responsible: "tanja@periodic.is"
            }),
            new model_1.Step({
                name: "Policies Training",
                nudges: [types_1.Nudge.EMAIL],
                responsible: "nate@periodic.is"
            }),
            new model_1.Step({
                name: "Personal Orientation",
                nudges: [types_1.Nudge.EMAIL],
                responsible: "nate@periodic.is"
            })
        ]
    }),
    CUSTOMER_ONBOARDING: new model_1.Workflow({
        name: "Customer OnBoarding",
        steps: [
            new model_1.Step({
                name: "AE Handoff Call",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
            new model_1.Step({
                name: "AE Handoff Call",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
            new model_1.Step({
                name: "Project Scope",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
            new model_1.Step({
                name: "Create Users",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
            new model_1.Step({
                name: "Quickstart Guide",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
            new model_1.Step({
                name: "Invoice",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
            new model_1.Step({
                name: "Swag Bag",
                nudges: [types_1.Nudge.EMAIL],
                responsible: random_data_1.RandomData.randomEmail()
            }),
        ]
    })
};
//# sourceMappingURL=fake-seed-data.js.map