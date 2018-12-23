"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AppRouter {
    constructor(options) {
        this.router = express_1.Router();
        this.controller = options.controller;
        this.paths = options.routerPaths;
    }
}
exports.AppRouter = AppRouter;
//# sourceMappingURL=app-router.js.map