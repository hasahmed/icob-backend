export class ConfEnv {
	constructor(
		public env: 'dev'|'stag'|'prod' = 'dev',
		public port: number=3030
	) {}
}

