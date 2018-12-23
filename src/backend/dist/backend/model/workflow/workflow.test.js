"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const workflow_1 = require("./workflow");
describe('BeginningTemplate tests', () => {
    it('Should be able to create an instance', () => {
        expect(new workflow_1.Workflow({
            name: '',
            steps: []
        })).toBeTruthy();
    });
    it('Should be have the passed in properties', () => {
        const begininngName = 'Employee Onboarding';
        const beg = new workflow_1.Workflow({
            name: begininngName,
            steps: []
        });
        expect(beg.steps).toEqual([]);
        expect(beg.name).toEqual(begininngName);
    });
    describe('CreationParams Tests', () => {
        it('Should be created', () => {
            expect(new workflow_1.Workflow.CreationParams()).toBeTruthy();
        });
        it('Should accept reasonable parameters', () => {
            expect(new workflow_1.Workflow.CreationParams({
                name: '',
                steps: []
            })).toBeTruthy();
        });
    });
});
//# sourceMappingURL=workflow.test.js.map