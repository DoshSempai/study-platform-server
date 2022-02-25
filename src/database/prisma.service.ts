import { PrismaClient, UserModel } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';

@injectable()
export class PrismaService {
	client: PrismaClient;

	constructor(@inject(TYPES.ILogger) private logger: ILogger) {
		this.client = new PrismaClient();
	}

	async connect(): Promise<void> {
		try {
			this.logger.log('[PrismaService] Начало подключения к базе данных');
			await this.client.$connect();
			this.logger.log('[PrismaService] Успешно подключились к базе данных');
		} catch (e) {
			if (e instanceof Error) {
				this.logger.error('[PrismaService] Ошибка при подключении к базе данных: ', e.message);
				return;
			}
			this.logger.error('[PrismaService] Ошибка при подключении к базе данных');
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect();
	}
}
