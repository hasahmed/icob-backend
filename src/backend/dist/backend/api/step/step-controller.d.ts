import { AppController } from '../api-common/app-controller';
import { Step } from '../../model';
import { DB } from '../../internal/interfaces';
export declare class StepController extends AppController<Step> {
    constructor(storage?: DB<Step>);
    create(stepCP?: Step.CreationParams): string | false;
}
