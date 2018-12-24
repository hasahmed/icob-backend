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
const workflow_controller_1 = require("./workflow-controller");
class WorkflowRouter extends app_router_1.AppRouter {
    constructor(options = {
        controller: new workflow_controller_1.WorkflowController(),
        routerPaths: ApiRoutes_1.WORKFLOW_ROUTES
    }) {
        super(options);
        const cont = this.controller;
        const creationHandler = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const begCP = req.body;
            try {
                const begId = cont.create(begCP);
                res.send(begId);
            }
            catch (e) {
                if (e.message === 'InvalidParameterError')
                    res.send(false);
                else
                    throw e;
            }
        });
        const getAllHanlder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if ('withChildren' in req.query && req.query.withChildren !== "0") {
                const begT = yield cont.getAllWithChildren();
                res.send(begT);
            }
            else {
                const beginnings = yield cont.get();
                res.send(beginnings);
            }
        });
        const getOneHanlder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (req.query.withChildren) {
                const begT = yield cont.getWithChildren(req.params.id);
                res.send(begT);
            }
            else {
                const begT = yield cont.getOne(req.params.id);
                res.send(begT);
            }
        });
        const nullHanlder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(1);
        });
        this.router.post(ApiRoutes_1.WORKFLOW_ROUTES.ENDPOINTS.ROOT, creationHandler);
        this.router.get(ApiRoutes_1.WORKFLOW_ROUTES.ENDPOINTS.ROOT, getAllHanlder);
        this.router.get(ApiRoutes_1.WORKFLOW_ROUTES.ENDPOINTS.GET_BY_ID, getOneHanlder);
        this.router.put(ApiRoutes_1.WORKFLOW_ROUTES.ENDPOINTS.ROOT, nullHanlder);
        this.router.patch(ApiRoutes_1.WORKFLOW_ROUTES.ENDPOINTS.ROOT, nullHanlder);
        this.router.delete(ApiRoutes_1.WORKFLOW_ROUTES.ENDPOINTS.ROOT, nullHanlder);
    }
}
exports.WorkflowRouter = WorkflowRouter;
//# sourceMappingURL=workflow-router.js.map