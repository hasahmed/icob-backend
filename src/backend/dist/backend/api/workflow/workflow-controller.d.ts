import { AppController } from '../api-common/app-controller';
import { Workflow } from '../../model';
import { DB } from '../../internal/interfaces';
import { InstanceController } from '../instance/instance-controller';
export declare class WorkflowController extends AppController<Workflow> {
    private begCont;
    constructor(storage?: DB<Workflow>, begCont?: InstanceController);
    create(begTCp: Workflow.CreationParams): string;
    get(): Workflow[];
    getWithChildren(begTId: string): Workflow;
    getAllWithChildren(): Workflow[];
}
