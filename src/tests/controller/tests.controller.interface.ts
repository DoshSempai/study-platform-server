import { NextFunction, Request, Response } from 'express';

export interface ITestController {
	read: (req: Request, res: Response, next: NextFunction) => void;
	create: (req: Request, res: Response, next: NextFunction) => void;
	// update: (req: Request, res: Response, next: NextFunction) => void;
	// writeResult: (req: Request, res: Response, next: NextFunction) => void;
	// delete: (req: Request, res: Response, next: NextFunction) => void;
}
