import { ConfMailer } from './ConfMailer';
import { ConfCrypt } from './ConfCrypt';
export declare class ConfAll {
    mailer: ConfMailer;
    crypt: ConfCrypt;
    constructor(mailer?: ConfMailer, crypt?: ConfCrypt);
}
