"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const api_1 = require("./api");
const app_1 = require("./app");
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');
const PORT = process.env.PORT || 3030;
const app = new app_1.App([
    new api_1.AccountRouter(),
], PORT, STATIC_PATH);
if (require.main === module) {
    app.listen();
}
//# sourceMappingURL=server.js.map