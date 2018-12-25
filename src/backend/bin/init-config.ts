import { PromptConfig } from "../internal/config/prompt-config";
import { APP_CONF } from '../conf';

(async () => {
	await new PromptConfig().prompt();
	console.log('Confg file written to ' + APP_CONF);
})();