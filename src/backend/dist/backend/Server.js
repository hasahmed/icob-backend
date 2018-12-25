"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const api_1 = require("./api");
const app_1 = require("./app");
const conf_handler_1 = require("./internal/config/conf-handler");
const conf = new conf_handler_1.ConfigHandler();
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');
const app = new app_1.App([
    new api_1.AccountRouter(),
], conf.env.port, STATIC_PATH);
if (require.main === module) {
    app.listen();
}
//# sourceMappingURL=server.js.map