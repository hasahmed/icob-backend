import path = require('path');
import { AccountRouter }  from './api';
import { App } from './app';
import { ConfigHandler } from './internal/config/conf-handler';


// /src/frontend/build
const conf = new ConfigHandler();
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');



const app = new App(
	[
		new AccountRouter(),
	],
	conf.env.port,
	STATIC_PATH
);
// run the app only if this script is envoked directly (as in don't run when imported)
if (require.main === module) {
	app.listen();
}
