import { AppController } from '../api-common/app-controller';
import { AccountManger } from '../../internal/AccountManager';
import { User } from '../../model';
import { DB } from '../../internal/interfaces';
export declare class AccountController extends AppController<User> {
    private acctManager;
    constructor(acctManager?: AccountManger, storage?: DB<User>);
    create(accountParams: User.CreationParams): Promise<boolean>;
    login(loginParams: {
        email: string;
        password: string;
    }): Promise<string | false>;
    verify(reqQuery: any): Promise<boolean>;
    acctExists(acctParams: User.CreationParams): Promise<boolean>;
}
