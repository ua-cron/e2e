import { testTabChange } from './../common/tab-change';

export const tabChange = () => describe('Tab change', () => {
	testTabChange('ReCron');
	testTabChange('ReUnixCron');
	testTabChange('ReQuartzCron');
});