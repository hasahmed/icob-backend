"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const step_1 = require("./step");
const types_1 = require("../../../common/types");
describe('Step Tests', () => {
    it('Should be able to create an instance', () => {
        expect(new step_1.Step({
            name: 'Benefits Enrollment',
            responsible: 'Katherine Ahmed',
            nudges: []
        })).toBeTruthy();
    });
    it('Should be have the passed in properties', () => {
        const stepName = 'Fillout NDA';
        const beg = new step_1.Step({
            name: stepName,
            responsible: 'Halima Badiyo',
            nudges: [types_1.Nudge.IN_APP, types_1.Nudge.EMAIL]
        });
        expect(beg.name).toEqual(stepName);
        expect(beg.responsible).toEqual('Halima Badiyo');
        expect(beg.nudges).toEqual(new Set([types_1.Nudge.IN_APP, types_1.Nudge.EMAIL]));
    });
    it('Should always have Nudge.IN_APP', () => {
        const beg = new step_1.Step({
            name: '',
            responsible: '',
            nudges: []
        });
        expect(beg.nudges.has(types_1.Nudge.IN_APP)).toEqual(true);
    });
    describe('CreationParams Tests', () => {
        it('Should be created', () => {
            expect(new step_1.Step.CreationParams()).toBeTruthy();
        });
        it('Should accept reasonable parameters', () => {
            expect(new step_1.Step.CreationParams({
                name: 'Email Resume to Tanja',
                responsible: 'Barak Obama',
                nudges: []
            })).toBeTruthy();
        });
    });
});
//# sourceMappingURL=step.test.js.map