import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middleware.interface';

export class HeadersMiddleware implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		next();
	}
}
