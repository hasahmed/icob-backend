import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { Request, Response } from 'express';
import { WORKFLOW_ROUTES } from '../../../common/ApiRoutes';
import { Workflow as Workflow } from '../../model';
import { WorkflowController } from './workflow-controller';

export class WorkflowRouter extends AppRouter<Workflow> {
	constructor(options: RouterOptions<Workflow> = {
		controller: new WorkflowController(),
		routerPaths: WORKFLOW_ROUTES
	}){
		super(options);
		const cont = this.controller as WorkflowController;

		const creationHandler = async (req: Request, res: Response) => {
			const begCP: Workflow.CreationParams = req.body;
			try {
				const begId = cont.create(begCP);
				res.send(begId);
			} catch (e) {
				if (e.message === 'InvalidParameterError')
					res.send(false);
				else
					throw e;
			}
		};


		const getAllHanlder = async (req: Request, res: Response) => {
			if ('withChildren' in req.query && req.query.withChildren !== "0") {
				const begT = await cont.getAllWithChildren();
				res.send(begT);
			}
			else {
				const beginnings = await cont.get();
				res.send(beginnings);
			}
		};

		const getOneHanlder = async (req: Request, res: Response) => {
			if (req.query.withChildren) {
				const begT = await cont.getWithChildren(req.params.id);
				res.send(begT);
			}
			else {
				const begT = await cont.getOne(req.params.id);
				res.send(begT);
			}
		};

		const nullHanlder = async (req: Request, res: Response) => {
			res.send(1);
		};



		// REST API
		this.router.post(WORKFLOW_ROUTES.ENDPOINTS.ROOT, creationHandler);
		this.router.get(WORKFLOW_ROUTES.ENDPOINTS.ROOT, getAllHanlder);
		this.router.get(WORKFLOW_ROUTES.ENDPOINTS.GET_BY_ID, getOneHanlder);
		this.router.put(WORKFLOW_ROUTES.ENDPOINTS.ROOT, nullHanlder);
		this.router.patch(WORKFLOW_ROUTES.ENDPOINTS.ROOT, nullHanlder);
		this.router.delete(WORKFLOW_ROUTES.ENDPOINTS.ROOT, nullHanlder);
		// <END> REST API
	}
}