import { AppController } from './app-controller';
import { RouterPaths } from '../../../common/ApiRoutes';
import { Resource } from '../../model/Resource';
export interface RouterOptions<T extends Resource> {
    controller: AppController<T>;
    routerPaths: RouterPaths;
}
