import { MailHandler } from './MailHandler';
import { User } from '../model';
export declare class AccountManger {
    private mailHandler;
    private tmpAuthKeyTable;
    constructor(mailHandler?: MailHandler);
    acctCreate(acctParams: User.CreationParams): Promise<boolean>;
    acctVerify(authKey: string): Promise<boolean>;
}
