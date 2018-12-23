import { Router } from 'express';
import { RouterOptions } from './router-options';
import { AppController } from './app-controller';
import { RouterPaths } from '../../../common/ApiRoutes';
import { Resource } from '../../model/Resource';
export declare class AppRouter<T extends Resource> {
    router: Router;
    protected readonly controller: AppController<any>;
    readonly paths: RouterPaths;
    constructor(options: RouterOptions<T>);
}
