"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const instance_controller_1 = require("./instance-controller");
const model_1 = require("../../model");
const types_1 = require("../../internal/types");
const fake_seed_data_1 = require("../../internal/types/fake-seed-data");
const random_data_1 = require("../../internal/types/random-data");
const cont = new instance_controller_1.InstanceController(new types_1.MemDb());
describe('Beginning Controller Tests', () => {
    it('Should get created', () => {
        expect(cont).toBeTruthy();
    });
    describe('Create', () => {
        it('Give the id of the beginning if creation succeeded', () => {
            const id = cont.create(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "Katherine Ahmed");
            expect(id).toBeTruthy();
            expect(id).toEqual(jasmine.any(String));
            expect(id.length).toBeGreaterThan(0);
            expect(id === '').toEqual(false);
        });
    });
    describe('Get', () => {
        it('Should retrieve all', () => {
            const b = new model_1.Instance(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "John Doe");
            const bc = new instance_controller_1.InstanceController(new types_1.MemDb());
            const startingAmount = bc.get()['length'] || 0;
            for (let i = 0; i < 100; i++) {
                bc.create(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, random_data_1.RandomData.randomFullName());
            }
            bc.put(b);
            const results = bc.get();
            if (model_1.Workflow.isBeginningTemplate(results)) {
            }
            expect(results['length']).toEqual(101 + startingAmount);
        });
        it('Should return a signle object when given an instance', () => {
            const b = new model_1.Instance(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "John Doe");
            const bc = new instance_controller_1.InstanceController(new types_1.MemDb());
            for (let i = 0; i < 3; i++) {
                bc.create(fake_seed_data_1.BEGINNING_TEMPLATES.EMPLOYEE_ONBOARDING, "Fatima Ahmed");
            }
            bc.put(b);
            const result = bc.getOne(b.id);
            expect(result).toBeTruthy();
            expect(result).toEqual(b);
            if (!model_1.Workflow.isBeginningTemplate(result))
                throw new Error('This block shouldn\'t be reached');
        });
    });
});
//# sourceMappingURL=instance-controller.test.js.map