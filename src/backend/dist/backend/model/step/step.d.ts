import { Resource } from '../Resource';
import { Nudge } from '../../../common/types';
import { Actions } from '../action/action';
export declare class Step extends Resource {
    name: string;
    responsible: string;
    nudges: Set<Nudge>;
    completed: boolean;
    actions: Actions;
    constructor(creationParams?: Step.CreationParams);
    toJSON(): this & {
        nudges: Nudge[];
    };
}
export declare namespace Step {
    class CreationParams extends Resource.CreationParams {
        name: string;
        responsible: string;
        nudges: Nudge[];
        actions?: Actions;
        constructor(params?: Step.CreationParams);
    }
}
