"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const fake_seed_data_1 = require("../../internal/types/fake-seed-data");
const instance_1 = require("./instance");
const workflow_1 = require("../workflow/workflow");
const templ = fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING;
describe('Beginning Tests', () => {
    it('Should be able to create a new Beginning Instance', () => {
        expect(new instance_1.Instance(templ, "Brad Wisler")).toBeTruthy();
    });
    it('Should store the name of the template it came from', () => {
        expect(new instance_1.Instance(templ, "Amazon LLC").parentName).toEqual(templ.name);
    });
    it('Name should include relevent information', () => {
        const begInst = new instance_1.Instance(templ, "Brad Wisler");
        expect(begInst.name.includes(templ.name.replace(/ /g, '_'))).toEqual(true);
        expect(begInst.name.includes(begInst.regarding.replace(/ /g, '_'))).toEqual(true);
    });
    it('Should have a parenTemplateId of the template it came from', () => {
        const begInst = new instance_1.Instance(templ, "Brad Wisler");
        expect(begInst.parentTemplateId).toEqual(templ.id);
        const tmpTempl = new workflow_1.Workflow();
        const begInst2 = new instance_1.Instance(tmpTempl);
        expect(begInst2.parentTemplateId).toEqual(tmpTempl.id);
    });
    it('Should have the same steps as its parent', () => {
        const begInst = new instance_1.Instance(templ, "Brad Wisler");
        begInst.steps.forEach(step => {
            expect(templ.steps.includes(step));
        });
    });
    it('Should have correct defaults', () => {
        const begInst = new instance_1.Instance(templ, "Brad Wisler");
        expect(begInst.regarding).toEqual("Brad Wisler");
        expect(begInst.steps.length).toEqual(templ.steps.length);
        expect(begInst.completedSteps.length).toEqual(0);
        expect(begInst.isFinished()).toEqual(false);
    });
    it('Should have correct step completion logic', () => {
        const begInst = new instance_1.Instance(templ, "Brad Wisler");
        expect(begInst.isFinished()).toEqual(false);
        for (let i = 0; i < begInst.steps.length; i++) {
            expect(begInst.currentStepIndex).toEqual(i);
            expect(begInst.isFinished()).toEqual(false);
            begInst.completeStep();
            expect(begInst.completedSteps.length).toEqual(i + 1);
        }
        expect(begInst.completedSteps.length).toEqual(begInst.steps.length);
        expect(begInst.isFinished()).toEqual(true);
    });
});
//# sourceMappingURL=instance.test.js.map