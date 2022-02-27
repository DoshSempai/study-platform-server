import { TestModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { PrismaService } from '../../database/prisma.service';
import { TYPES } from '../../types';
import { Test } from '../entity/test.entity';
import { ITestsRepository } from './tests.repository.interface';

@injectable()
export class TestsRepository implements ITestsRepository {
	constructor(@inject(TYPES.PrismaService) private prismaService: PrismaService) {}

	async create(test: Test): Promise<TestModel> {
		return this.prismaService.client.testModel.create({
			data: {
				authorId: test.authorId,
				title: test.title,
				testMode: test.testMode,
				trainMode: test.trainMode,
				parole: test.parole,
				test: test.test,
				results: test.results,
			},
			include: { author: true },
		});
	}

	async findMany(): Promise<TestModel[]> {
		return this.prismaService.client.testModel.findMany({
			include: { author: true },
		});
	}
}
