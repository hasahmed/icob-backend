import path = require('path');
import { App } from './app';
import { ConfigHandler } from './internal/config/conf-handler';
import { UserRouter } from './api/user/user-router';


// /src/frontend/build
const conf = new ConfigHandler();
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');



const app = new App(
	[
		new UserRouter()
	],
	conf.env.port,
	STATIC_PATH
);
// run the app only if this script is envoked directly (as in don't run when imported)
if (require.main === module) {
	app.listen();
}
