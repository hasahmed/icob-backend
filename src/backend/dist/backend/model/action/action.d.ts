interface Trigger {
    onStepBegin: string;
    onStepEnd: string;
}
declare type Effect = 'complete-step' | 'post-url';
export declare type Actions = {
    [trigger in keyof Trigger]?: Effect;
};
export {};
