import { TestModel } from '@prisma/client';
import { TestDto } from '../dto/test.dto';

export interface ITestService {
	createTest: (dto: TestDto) => Promise<TestModel | null>;
	getTests: () => Promise<TestModel[]>;
	updateTest: (id: number, dto: TestDto) => Promise<TestModel | null>;
	deleteTest: (id: number) => Promise<TestModel | null>;
}
