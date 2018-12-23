"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const step_controller_1 = require("./step-controller");
const types_1 = require("../../../common/types");
const cont = new step_controller_1.StepController();
describe('Step Controller Tests', () => {
    it('Should get created', () => {
        expect(cont).toBeTruthy();
    });
    describe('Create', () => {
        it('Should return false when Step.CreationParams arent there', () => {
            expect(cont.create()).toEqual(false);
        });
        it('Should return false when Step.CreationParams are invalid', () => {
            expect(cont.create({
                name: 'hello',
                nudge: 'This should be a Nudge[], but instead is a string',
                responsible: 'Me',
            })).toEqual(false);
        });
        it('Give the id of the steap if creation succeeded', () => {
            const id = cont.create({
                name: 'hello',
                nudges: [types_1.Nudge.EMAIL],
                responsible: 'Me',
            });
            expect(id).toBeTruthy();
            expect(id).toEqual(jasmine.any(String));
            if (id) {
                expect(id.length).toBeGreaterThan(0);
            }
            else {
                expect(false).toBeTruthy();
            }
            expect(id === '').toEqual(false);
        });
    });
});
//# sourceMappingURL=step-controller.test.js.map