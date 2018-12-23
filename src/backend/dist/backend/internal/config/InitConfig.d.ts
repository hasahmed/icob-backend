import { ConfigHandler } from './ConfHandler';
export declare class InitConfig {
    private confHandler;
    private writeOut;
    private injections?;
    constructor(confHandler?: ConfigHandler, writeOut?: boolean, injections?: Object | undefined);
    prompt(): Promise<string>;
}
