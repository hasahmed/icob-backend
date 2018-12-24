// import { APP_CONF } from '../../../common/common-data'
import * as fs from 'fs';
import { ConfMailer } from './conf-mailer';
import { ConfAll } from './conf-all';
import { APP_CONF } from '../../conf';
import { ConfCrypt } from './conf-crypt';
import { ConfEnv } from './conf-env';
import { ConfDb } from './conf-db';

export class ConfigHandler {

	private confAll: ConfAll = new ConfAll();


	constructor(
		public readonly confPath: string=APP_CONF,
	){
		this.init();
	}


	//public API
	/**
	 * accessesors to the specific configs
	 * instances
	 */
	public get mailer(): ConfMailer { return this.confAll.mailer; }
	public get crypt(): ConfCrypt { return this.confAll.crypt; }
	public get env(): ConfEnv { return this.confAll.env; }
	public get db(): ConfDb { return this.confAll.db; }
	// end access to config instances


	public setConf(newConf: ConfAll) {
		this.confAll = newConf;
	}
	public confWrite() {
		fs.writeFileSync(this.confPath, JSON.stringify(this.confAll, null, 2));
	}
	public confExists(): boolean {
		return fs.existsSync(this.confPath);
	}
	public confDelete(): void {
		if (this.confExists())
			fs.unlinkSync(this.confPath);
	}


	// end public API

	// private implementaton
	private confRead(): Object {
		return JSON.parse(
			fs.readFileSync(
				this.confPath,
				'utf8'
			)
		);
	}
	private init(): void {
		if (this.confExists()) {
			const defaultConf = new ConfAll();
			const conf = this.confRead();
			ConfigHandler.copyPresent(defaultConf, conf);
			this.confAll = defaultConf; //all the values read in
		} else {
			this.confAll = new ConfAll();
		}
	}
	private static copyPresent = (retConf: ConfAll, rawConf: Object) => {
		for (const key in rawConf) {
			if (key in rawConf) {
				if (typeof rawConf[key] === 'object')
					ConfigHandler.copyPresent(retConf[key], rawConf[key]);
				else
					retConf[key] = rawConf[key];
			}
		}
	}
}