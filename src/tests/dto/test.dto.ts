import { IsBoolean, IsString, IsNumber } from 'class-validator';

export class TestDto {
	@IsNumber()
	authorId: number;

	@IsString({ message: 'Неверно указан пароль' })
	title: string;

	@IsBoolean({ message: 'Ошибка в данных режима тестирования' })
	testMode: boolean;

	@IsBoolean({ message: 'Ошибка в данных режима тренировки' })
	trainMode: boolean;

	parole: string | null;

	@IsString({ message: 'Ошибка в данных теста' })
	test: string;

	@IsString({ message: 'Ошибка в данных результата' })
	results: string;
}
