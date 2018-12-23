import { InitConfig } from "../internal/config/InitConfig";
import { APP_CONF } from '../conf';

(async () => {
	await new InitConfig().prompt();
	console.log('Confg file written to ' + APP_CONF);
})();