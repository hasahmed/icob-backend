import { AppRouter } from '../api-common/app-router';
import { RouterOptions } from '../api-common/router-options';
import { Request, Response } from 'express';
import { UserController } from './user-controller';
import { USER_ROUTES } from '../../../common/ApiRoutes';
import * as auth from 'basic-auth';
import { User } from '../../model';

export class AccountCreationError {
	public message = 'Unable to create account';	
}
class InvalidParameterError extends Error {
	static ERROR_CODE = 422;
	constructor(message: string) {
		super(message);
		this.name = "InvalidParamaterError";
	}
} 
class UnimplementedError extends Error {
	static ERROR_CODE = 405;
	constructor() {
		super("Method Not Implemented");
		this.name = "UnimplementedError";
	}
} 
class UsernameExistsError extends Error {
	static ERROR_CODE = 409;
	constructor() {
		super("The provided username already exists in the database");
		this.name = "UsernameExistsError";
	}
} 
class InvalidLoginCredentialsError extends Error {
	static ERROR_CODE = 401;
	constructor() {
		super("The username/password combination is invalid");
		this.name = "InvalidLoginCredentials";
	}
} 

export class UserRouter extends AppRouter<User> {
	constructor(options: RouterOptions<User> = {
		controller: new UserController(),
		routerPaths: USER_ROUTES
	}){
		super(options);
		const cont = this.controller as UserController;


		// REST API
		const create = async (req: Request, res: Response) => {
			// console.log (req.body);
			if (req.body && req.body.username && req.body.password) {
				if (await cont.acctExists(req.body)) {
					res.status(UsernameExistsError.ERROR_CODE).send(
						new UsernameExistsError()
					);
				}
				else {
					const status = await cont.acctCreate(req.body);
					res.send({accountCreated: status});
				}
			}
			else {
				res.status(InvalidParameterError.ERROR_CODE).send(
					new InvalidParameterError("Expected username, password, recieved: " + JSON.stringify(req.body))
				);
			}
		}
		const read = async (req: Request, res: Response) => {
			res.status(UnimplementedError.ERROR_CODE).send(new UnimplementedError());
		}
		const update = async (req: Request, res: Response) => {
			res.status(UnimplementedError.ERROR_CODE).send(new UnimplementedError());
		}
		const del = async (req: Request, res: Response) => {
			res.status(UnimplementedError.ERROR_CODE).send(new UnimplementedError());
		}
		// END REST API


		const login = async (req: Request, res: Response) => {
			console.log(req.body);
			if (req.body && req.body.username && req.body.password) {
				const result = await cont.login(req.body);
				if (!result) {
					res.status(InvalidLoginCredentialsError.ERROR_CODE).send(new InvalidLoginCredentialsError());
				}
				else {
					res.send(true);
				}
			}
			else {
				res.status(InvalidParameterError.ERROR_CODE).send(
					new InvalidParameterError("Expected username, password, recieved: " + JSON.stringify(req.body))
				);
			}
		}


		// REST
		this.router.post(USER_ROUTES.ENDPOINTS.INDEX, create);
		this.router.get(USER_ROUTES.ENDPOINTS.INDEX + ':id', read);
		this.router.put(USER_ROUTES.ENDPOINTS.INDEX, update);
		this.router.delete(USER_ROUTES.ENDPOINTS.INDEX, del);
		// END REST


		//login
		this.router.post(USER_ROUTES.ENDPOINTS.LOGIN, login);

	}
}