import { Container, ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ConfigService } from './config/config.service';
import { IConfigService } from './config/config.service.interface';
import { PrismaService } from './database/prisma.service';
import { ExceptionFilter } from './errors/exception.filter';
import { IExceptionFilter } from './errors/exception.filter.interface';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TestController } from './tests/controller/tests.controller';
import { ITestController } from './tests/controller/tests.controller.interface';
import { TestsRepository } from './tests/repository/tests.repository';
import { ITestsRepository } from './tests/repository/tests.repository.interface';
import { TestService } from './tests/service/tests.service';
import { ITestService } from './tests/service/tests.service.interface';
import { TYPES } from './types';
import { UserController } from './users/controller/users.controller';
import { IUserController } from './users/controller/users.controller.interface';
import { UsersRepository } from './users/repository/users.repository';
import { IUsersRepository } from './users/repository/users.repository.interface';
import { UserService } from './users/service/users.service';
import { IUserService } from './users/service/users.service.interface';

export interface IBootstrapReturn {
	appContainer: Container;
	app: App;
}

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
	bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter).inSingletonScope();
	bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
	bind<PrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
	bind<IUserController>(TYPES.UserController).to(UserController).inSingletonScope();
	bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
	bind<IUsersRepository>(TYPES.UsersRepository).to(UsersRepository).inSingletonScope();
	bind<ITestController>(TYPES.TestController).to(TestController).inSingletonScope();
	bind<ITestService>(TYPES.TestService).to(TestService).inSingletonScope();
	bind<ITestsRepository>(TYPES.TestsRepository).to(TestsRepository).inSingletonScope();
	bind<App>(TYPES.Application).to(App).inSingletonScope();
});

function bootstrap(): IBootstrapReturn {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.Application);
	app.init();
	return { appContainer, app };
}

export const { app, appContainer } = bootstrap();
