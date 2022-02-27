import { TestModel } from '@prisma/client';
import { TestDto } from '../dto/test.dto';

export interface ITestService {
	createTest: (dto: TestDto) => Promise<TestModel | null>;
	getTests: () => Promise<TestModel[]>;
}
