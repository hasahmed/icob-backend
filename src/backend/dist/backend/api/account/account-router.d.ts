import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { User } from '../../model';
export declare class AccountCreationError {
    message: string;
}
export declare class AccountRouter extends AppRouter<User> {
    constructor(options?: RouterOptions<User>);
}
