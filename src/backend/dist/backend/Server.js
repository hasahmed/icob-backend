"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const api_1 = require("./api");
const app_1 = require("./app");
const ApiRoutes_1 = require("../common/ApiRoutes");
const fake_db_1 = require("./internal/types/fake-db");
const model_1 = require("./model");
const db_connector_1 = require("./internal/types/db-connector");
const instance_controller_1 = require("./api/instance/instance-controller");
const workflow_controller_1 = require("./api/workflow/workflow-controller");
const workflow_router_1 = require("./api/workflow/workflow-router");
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');
const PORT = process.env.PORT || 3030;
const BEG_CONT = new instance_controller_1.InstanceController(new db_connector_1.DbConnector(fake_db_1.FAKE_DB, model_1.Instance));
const BEG_T_CONT = new workflow_controller_1.WorkflowController(new db_connector_1.DbConnector(fake_db_1.FAKE_DB, model_1.Workflow), BEG_CONT);
const BEG_T_ROUTER = new workflow_router_1.WorkflowRouter({
    controller: BEG_T_CONT,
    routerPaths: ApiRoutes_1.WORKFLOW_ROUTES
});
const BEG_ROUTER = new api_1.InstanceRouter({
    controller: BEG_CONT,
    routerPaths: ApiRoutes_1.INSTANCE_ROUTES
});
const app = new app_1.App([
    new api_1.AccountRouter(),
    BEG_T_ROUTER,
    BEG_ROUTER,
    new api_1.StepRouter(),
], PORT, STATIC_PATH);
if (require.main === module) {
    app.listen();
}
//# sourceMappingURL=Server.js.map