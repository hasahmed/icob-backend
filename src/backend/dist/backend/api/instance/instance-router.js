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
const instance_controller_1 = require("./instance-controller");
class InstanceRouter extends app_router_1.AppRouter {
    constructor(options = {
        controller: new instance_controller_1.InstanceController(),
        routerPaths: ApiRoutes_1.INSTANCE_ROUTES
    }) {
        super(options);
        const cont = this.controller;
        const getByIdHandler = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(cont.getOne(req.params.id));
        });
        this.router.post(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const begCP = req.body;
        }));
        this.router.get(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.GET_BY_ID, getByIdHandler);
        this.router.get(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            const beginnings = yield cont.get();
            res.send(beginnings);
        }));
        this.router.put(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send({ recieved: true });
        }));
        this.router.patch(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("update\n");
        }));
        this.router.delete(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("delete\n");
        }));
        this.router.post(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send({ lettuce: 'tacos' });
        }));
        this.router.get(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.ROOT, (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send({ recieved: false });
        }));
        this.router.get(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.TEST, (req, res) => __awaiter(this, void 0, void 0, function* () {
        }));
        this.router.post(ApiRoutes_1.INSTANCE_ROUTES.ENDPOINTS.TEST, (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            console.log('calllllleeeeddddd');
            res.send({ recieved: "Yeeeaaahhhhhh boiiiiii" });
        }));
    }
}
exports.InstanceRouter = InstanceRouter;
//# sourceMappingURL=instance-router.js.map