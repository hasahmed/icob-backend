import axios from 'axios';
import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { Request, Response } from 'express';
import { INSTANCE_ROUTES } from '../../../common/ApiRoutes';
import { Workflow, Instance } from '../../model';
import { InstanceController } from './instance-controller';
import { RandomData } from '../../internal/types/random-data';

export class InstanceRouter extends AppRouter<Instance> {
	constructor(options: RouterOptions<Instance> = {
		controller: new InstanceController(),
		routerPaths: INSTANCE_ROUTES
	}){
		super(options);
		const cont = this.controller as InstanceController;




		const getByIdHandler = async (req: Request, res: Response) => {
			res.send(cont.getOne(req.params.id));
		};



		// REST API
		this.router.post(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			const begCP: Workflow.CreationParams = req.body;
			// const begIdOrFalse = cont.create(begCP);
			// res.send(begIdOrFalse);
		});
		this.router.get(INSTANCE_ROUTES.ENDPOINTS.GET_BY_ID, getByIdHandler);
		this.router.get(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			const beginnings = await cont.get();
			res.send(beginnings);
		});
		this.router.put(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send({recieved: true});
		});
		this.router.patch(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send("update\n");
		});
		this.router.delete(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send("delete\n");
		});
		// <END> REST API



		// CREATE NEW Beginning
		this.router.post(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send({lettuce: 'tacos'});
		});
		this.router.get(INSTANCE_ROUTES.ENDPOINTS.ROOT, async (req: Request, res: Response) => {
			res.send({recieved: false});
		});
		this.router.get(INSTANCE_ROUTES.ENDPOINTS.TEST, async (req: Request, res: Response) => {
		});
		this.router.post(INSTANCE_ROUTES.ENDPOINTS.TEST, async (req: Request, res: Response) => {
			console.log(req.body);
			console.log('calllllleeeeddddd');
			res.send({recieved: "Yeeeaaahhhhhh boiiiiii"});
		});
	}
}