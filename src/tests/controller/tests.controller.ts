import { NextFunction, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import { BaseController } from '../../common/base.controller';
import { HTTPError } from '../../errors/http-error.class';
import { ValidateMiddleware } from '../../common/validate.middleware';
import { ILogger } from '../../logger/logger.interface';
import { TYPES } from '../../types';
import { IUserService } from '../../users/service/users.service.interface';
import { TestDto } from '../dto/test.dto';
import { ITestService } from '../service/tests.service.interface';
import { ITestController } from './tests.controller.interface';

@injectable()
export class TestController extends BaseController implements ITestController {
	constructor(
		@inject(TYPES.ILogger) private loggerService: ILogger,
		@inject(TYPES.UserService) private userService: IUserService,
		@inject(TYPES.TestService) private testService: ITestService,
	) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/tests',
				method: 'get',
				func: this.readMy,
			},
			{
				path: '/tests',
				method: 'post',
				func: this.create,
				middlewares: [new ValidateMiddleware(TestDto)],
			},
		]);
	}

	async readMy(req: Request<{}, {}, {}>, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, { readTests: 'in progress' });
	}

	async create(
		{ body }: Request<{}, {}, TestDto>,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		const userInfo = await this.userService.getUserById(body.authorId);
		if (!userInfo) {
			return next(new HTTPError(401, 'Ошибка авторизации'));
		}

		const result = await this.testService.createTest(body);
		if (!result) {
			return next(new HTTPError(422, 'Не удалось создать тест'));
		}

		this.ok(res, { id: result.id, authorId: result.authorId, title: result.title });
	}
}
