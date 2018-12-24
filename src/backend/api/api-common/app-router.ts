import { Router } from 'express';
import { RouterOptions } from './router-options';
import { AppController } from './app-controller';
import { RouterPaths } from '../../../common/ApiRoutes';
import { Resource } from '../../model/resource';


export class AppRouter<T extends Resource> {
	public router: Router = Router();
	protected readonly controller: AppController<any>;
	public readonly paths: RouterPaths;
	constructor(options: RouterOptions<T>)
	{
		this.controller = options.controller;
		this.paths = options.routerPaths;
	}
}
