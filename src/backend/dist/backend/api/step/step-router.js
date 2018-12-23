"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_router_1 = require("../api-common/app-router");
const ApiRoutes_1 = require("../../../common/ApiRoutes");
const step_controller_1 = require("./step-controller");
class StepRouter extends app_router_1.AppRouter {
    constructor(options = {
        controller: new step_controller_1.StepController(),
        routerPaths: ApiRoutes_1.STEP_ROUTES
    }) {
        super(options);
        const cont = this.controller;
        this.router.post(ApiRoutes_1.STEP_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const stepCP = req.body;
            const stepIdOrFalse = cont.create(stepCP);
            res.send(stepIdOrFalse);
        }));
        this.router.get(ApiRoutes_1.STEP_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("retrieve\n");
        }));
        this.router.put(ApiRoutes_1.STEP_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("replace\n");
        }));
        this.router.patch(ApiRoutes_1.STEP_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("update\n");
        }));
        this.router.delete(ApiRoutes_1.STEP_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("delete\n");
        }));
        this.router.get(ApiRoutes_1.STEP_ROUTES.ENDPOINTS.TEST, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(req.query);
        }));
    }
}
exports.StepRouter = StepRouter;
//# sourceMappingURL=step-router.js.map