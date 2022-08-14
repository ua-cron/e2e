import { testTabChange } from './../common/tab-change';

describe('Tab change', () => {
	testTabChange('ReCron');
	testTabChange('ReUnixCron');
	testTabChange('ReQuartzCron');
});