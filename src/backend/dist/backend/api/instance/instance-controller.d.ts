import { AppController } from '../api-common/app-controller';
import { Instance, Workflow } from '../../model';
import { DB } from '../../internal/interfaces';
export declare class InstanceController extends AppController<Instance> {
    constructor(storage?: DB<Instance>);
    seed(): void;
    create(template: Workflow, reguarding: string): string;
}
