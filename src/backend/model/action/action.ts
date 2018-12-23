interface Trigger {
	onStepBegin: string;
	onStepEnd: string;
}
type Effect = 'complete-step' | 'post-url';

export type Actions = {
	[trigger in keyof Trigger]?: Effect;
};