import path = require('path');
import { AccountRouter, InstanceRouter, StepRouter } from './api';
import { App } from './app';
import { INSTANCE_ROUTES, WORKFLOW_ROUTES } from '../common/ApiRoutes';
import { FAKE_DB } from './internal/types/fake-db';
import { Instance, Workflow } from './model';
import { DbConnector } from './internal/types/db-connector';
import { InstanceController } from './api/instance/instance-controller';
import { WorkflowController } from './api/workflow/workflow-controller';
import { WorkflowRouter } from './api/workflow/workflow-router';



// /src/frontend/build
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');
const PORT = process.env.PORT || 3030;

const BEG_CONT = new InstanceController(new DbConnector<Instance>(FAKE_DB, Instance));
const BEG_T_CONT = new WorkflowController(
	new DbConnector<Workflow>(FAKE_DB, Workflow),
	BEG_CONT
);


const BEG_T_ROUTER = new WorkflowRouter({
	controller: BEG_T_CONT,
	routerPaths: WORKFLOW_ROUTES
});
const BEG_ROUTER = new InstanceRouter({
	controller: BEG_CONT,
	routerPaths: INSTANCE_ROUTES
});


const app = new App(
	[
		new AccountRouter(),
		BEG_T_ROUTER,
		BEG_ROUTER,
		new StepRouter(),
	],
	PORT,
	STATIC_PATH
);
// run the app only if this script is envoked directly (as in don't run when imported)
if (require.main === module) {
	app.listen();
}
