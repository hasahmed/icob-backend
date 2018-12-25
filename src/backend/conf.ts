import * as path from 'path';
import * as os from 'os';


const SQLITE_DB_EXTEND = '-db.sqlite';
const BACKEND_DIR = path.join('src', 'backend');
const CONFIG_EXTEND = '-conf.json';

export const APP_NAME = 'icob-app';


export const APP_CONF_NAME = '.' + APP_NAME + CONFIG_EXTEND;
export const DB_NAME = APP_NAME + SQLITE_DB_EXTEND;
export const SQLITE_DB = path.join(process.cwd(), BACKEND_DIR, 'db', DB_NAME);
export const APP_CONF = path.join(os.homedir(), APP_CONF_NAME);
