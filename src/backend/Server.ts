import path = require('path');
import { AccountRouter }  from './api';
import { App } from './app';


// /src/frontend/build
const STATIC_PATH = path.join(process.cwd(), 'src', 'frontend', 'build');
const PORT = process.env.PORT || 3030;



const app = new App(
	[
		new AccountRouter(),
	],
	PORT,
	STATIC_PATH
);
// run the app only if this script is envoked directly (as in don't run when imported)
if (require.main === module) {
	app.listen();
}
