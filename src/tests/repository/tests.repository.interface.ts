import { TestModel } from '@prisma/client';
import { Test } from '../entity/test.entity';

export interface ITestsRepository {
	create: (test: Test) => Promise<TestModel>;
	findMany: () => Promise<TestModel[]>;
	update: (id: number, test: Test) => Promise<TestModel>;
	delete: (id: number) => Promise<TestModel>;
}
