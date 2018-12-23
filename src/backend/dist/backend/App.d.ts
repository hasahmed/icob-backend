import express = require('express');
import { AppRouter } from './api/api-common/app-router';
export declare class App {
    private readonly routers;
    private PORT;
    private STATIC_PATH;
    readonly app: express.Application;
    constructor(routers: AppRouter<any>[], PORT: number | string, STATIC_PATH: any);
    listen(): void;
}
