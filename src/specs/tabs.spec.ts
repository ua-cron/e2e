import { testTabs } from './../common/tabs';

describe('Tabs', () => {
	testTabs('ReCron');
	testTabs('ReUnixCron');
	testTabs('ReQuartzCron');
});