import { ConfMailer } from './ConfMailer';
import { ConfAll } from './ConfAll';
import { ConfCrypt } from './ConfCrypt';
export declare class ConfigHandler {
    readonly confPath: string;
    private confAll;
    constructor(confPath?: string);
    setConf(newConf: ConfAll): void;
    readonly mailer: ConfMailer;
    readonly crypt: ConfCrypt;
    confWrite(): void;
    confExists(): boolean;
    confDelete(): void;
    private confRead;
    private init;
    private static copyPresent;
}
