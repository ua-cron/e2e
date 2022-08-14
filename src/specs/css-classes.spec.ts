import { testCssClasses } from './../common/css-classes/css-classes';

export const cssClasses = () => describe('CSS Classes', () => {
	testCssClasses('ReCron');
	testCssClasses('ReUnixCron');
	testCssClasses('ReQuartzCron');
});