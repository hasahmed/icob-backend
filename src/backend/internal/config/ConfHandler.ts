// import { APP_CONF } from '../../../common/common-data'
import * as fs from 'fs';
import { ConfMailer } from './ConfMailer';
import { ConfAll } from './ConfAll';
import { APP_CONF } from '../../conf';
import { ConfCrypt } from './ConfCrypt';

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
	public setConf(newConf: ConfAll) {
		this.confAll = newConf;
	}
	public get mailer(): ConfMailer {
		return this.confAll.mailer;
	}
	public get crypt(): ConfCrypt {
		return this.confAll.crypt;
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