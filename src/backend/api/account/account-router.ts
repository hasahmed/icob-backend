import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { Request, Response } from 'express';
import { AccountController } from './account-controller';
import { ACCOUNT_ROUTES } from '../../../common/ApiRoutes';
import * as auth from 'basic-auth';
import { User } from '../../model';

export class AccountCreationError {
	public message = 'Unable to create account';	
}

export class AccountRouter extends AppRouter<User> {
	constructor(options: RouterOptions<User> = {
		controller: new AccountController(),
		routerPaths: ACCOUNT_ROUTES
	}){
		super(options);
		const cont = this.controller as AccountController;

		this.router.post(ACCOUNT_ROUTES.ENDPOINTS.SIGNUP, async (req: Request, res: Response) => {
			if (await cont.acctExists(req.body))
				res.send(false);
			else
				res.send(await cont.create(req.body));
		});

		this.router.post(ACCOUNT_ROUTES.ENDPOINTS.VERIFY, async (req: Request, res: Response) => {
			try {
				res.send(await cont.verify(req.body));
			} catch(err) {
				res.status(512).send(err);
			}
		});
		this.router.post(ACCOUNT_ROUTES.ENDPOINTS.LOGIN, async (req: Request, res: Response) => {
			try {
				res.send(await cont.verify(req.body));
			} catch(err) {
				res.status(512).send(err);
			}
		});

		// const alwaysLogin = true;
		const alwaysLogin = false;

		this.router.get('/auth-test', async (req: Request, res) => {
			const authParams = auth(req);
			if (authParams) {
				const validity = await cont.login({email: authParams.name, password: authParams.pass});
				if (validity || alwaysLogin) {
					res.send(true);
				} else {
					res.status(401).send(false);
				}
			} else {
				res.status(401).send(false);
			}
		});

		this.router.post('/zaptest', (req, res) => {
			console.log('/account/test');
			console.log(req.body);
			res.send("OK");
		});
		this.router.get('/beginners', (req, res) => {
			console.log('/beginnings');
		});

		this.router.get('/beginnings', (req, res) => {
			console.log('/beginnings');
			console.log(req.params);
			// const beginnings = ctrl.fetchBeginnings();
			const begininngs = [
			{
				id: '123',
				createdAt: Date.now(),
				name: 'New Applicant'
			},
			{
				id: '456',
				createdAt: Date.now(),
				name: 'Employee Onboarding'
			}
		];
			res.send(begininngs);
		});
	}
}