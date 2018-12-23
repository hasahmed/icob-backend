import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { Request, Response } from 'express';
import { STEP_ROUTES } from '../../../common/ApiRoutes';
import { StepController } from './step-controller';
import { Step } from '../../model';

export class StepRouter extends AppRouter<Step> {
	constructor(options: RouterOptions<Step> = {
		controller: new StepController(),
		routerPaths: STEP_ROUTES 
	}){
		super(options);
		const cont = this.controller as StepController;


		// REST API
		this.router.post(STEP_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			const stepCP: Step.CreationParams = req.body;
			const stepIdOrFalse = cont.create(stepCP);
			res.send(stepIdOrFalse);
		});
		this.router.get(STEP_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send("retrieve\n");
		});
		this.router.put(STEP_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send("replace\n");
		});
		this.router.patch(STEP_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send("update\n");
		});
		this.router.delete(STEP_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send("delete\n");
		});
		// <END> REST API





		this.router.get(STEP_ROUTES.ENDPOINTS.TEST, async (req: Request, res: Response) => {
			res.send(req.query);
		});
	}
}
