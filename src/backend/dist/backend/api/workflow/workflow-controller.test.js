"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const fake_seed_data_1 = require("../../internal/types/fake-seed-data");
const workflow_controller_1 = require("./workflow-controller");
const types_1 = require("../../internal/types");
const model_1 = require("../../model");
const random_data_1 = require("../../internal/types/random-data");
const instance_controller_1 = require("../instance/instance-controller");
const begTCont = new workflow_controller_1.WorkflowController();
describe('BeginningTemplate Controller Tests', () => {
    describe('Create', () => {
        it('Should return the ID of created', () => {
            const begT = begTCont.create({
                name: "Hello",
                steps: []
            });
            expect(begT).toBeTruthy();
            expect(begT).toEqual(jasmine.any(String));
        });
    });
    describe('Get', () => {
        it('Should retrieve all', () => {
            const begTCont = new workflow_controller_1.WorkflowController();
            for (let i = 0; i < 100; i++) {
                begTCont.put(new model_1.Workflow({
                    name: random_data_1.RandomData.randomName(),
                    steps: fake_seed_data_1.BEGINNING_TEMPLATES.CUSTOMER_ONBOARDING.steps
                }));
            }
            const all = begTCont.get();
            expect(all.length).toEqual(100);
        });
        it('Should get with children', () => {
            const begTCont = new workflow_controller_1.WorkflowController(new types_1.MemDb(), new instance_controller_1.InstanceController());
            begTCont['begCont'].seed();
            begTCont.put(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING);
            const id = fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING.id;
            const allWithChildren = begTCont.getWithChildren(id);
            expect(allWithChildren).toBeTruthy();
            expect(allWithChildren.children).toBeTruthy();
            expect(allWithChildren.children.length).toBeGreaterThan(0);
        });
    });
});
//# sourceMappingURL=workflow-controller.test.js.map