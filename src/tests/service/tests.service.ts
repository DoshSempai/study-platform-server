import { TestModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { IConfigService } from '../../config/config.service.interface';
import { TYPES } from '../../types';
import { TestDto } from '../dto/test.dto';
import { Test } from '../entity/test.entity';
import { ITestsRepository } from '../repository/tests.repository.interface';
import { ITestService } from './tests.service.interface';

@injectable()
export class TestService implements ITestService {
	constructor(
		@inject(TYPES.ConfigService) private configService: IConfigService,
		@inject(TYPES.TestsRepository) private testsRepository: ITestsRepository,
	) {}

	async createTest(dtoTest: TestDto): Promise<TestModel | null> {
		const newTest = new Test(
			dtoTest.authorId,
			dtoTest.title,
			dtoTest.testMode,
			dtoTest.trainMode,
			dtoTest.parole,
			dtoTest.test,
			dtoTest.results,
		);
		return this.testsRepository.create(newTest);
	}

	async getTests(): Promise<TestModel[]> {
		return this.testsRepository.findMany();
	}

	async updateTest(id: number, dtoTest: TestDto): Promise<TestModel | null> {
		const newTest = new Test(
			dtoTest.authorId,
			dtoTest.title,
			dtoTest.testMode,
			dtoTest.trainMode,
			dtoTest.parole,
			dtoTest.test,
			dtoTest.results,
		);
		return this.testsRepository.update(id, newTest);
	}

	async deleteTest(id: number): Promise<TestModel | null> {
		return this.testsRepository.delete(id);
	}
}
