import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { Workflow as Workflow } from '../../model';
export declare class WorkflowRouter extends AppRouter<Workflow> {
    constructor(options?: RouterOptions<Workflow>);
}
