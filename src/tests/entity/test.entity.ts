export class Test {
	constructor(
		private readonly _authorId: number,
		private readonly _title: string,
		private readonly _testMode: boolean,
		private readonly _trainMode: boolean,
		private readonly _parole: string | null,
		private readonly _test: string,
		private readonly _results: string,
	) {}

	get authorId(): number {
		return this._authorId;
	}

	get title(): string {
		return this._title;
	}

	get testMode(): boolean {
		return this._testMode;
	}

	get trainMode(): boolean {
		return this._trainMode;
	}

	get parole(): string | null {
		return this._parole;
	}

	get test(): string {
		return this._test;
	}

	get results(): string {
		return this._results;
	}
}
