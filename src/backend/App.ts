import express = require('express');
import * as path from 'path';
import bodyParser = require('body-parser');
import { Request, Response } from 'express-serve-static-core';
import { AppRouter } from './api/api-common/app-router';


export class App {
  public readonly app : express.Application = express();
  constructor(
    private readonly routers: AppRouter<any>[],
    private PORT: number | string,
    private STATIC_PATH
  ) {
    this.app.use(bodyParser.json());
    // this.app.use(bodyParser.urlencoded());
    this.routers.forEach(router  => {
      this.app.use(router.paths.PATH_PREFIX, router.router);
    });
    this.app.use(express.static(this.STATIC_PATH));
    this.app.get('/*', (req: Request, res: Response) => {
      res.sendFile(path.join(this.STATIC_PATH, 'index.html'));
    });
	}
	public listen(){
    this.app.listen(this.PORT, () => {
      console.log(`Node server listening on http://localhost:${this.PORT}`);
    });
	}
}