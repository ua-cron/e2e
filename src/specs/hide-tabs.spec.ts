import { testHideTabs } from './../common/hide-tabs';

describe('Hide Tabs', () => {
	testHideTabs('ReCron');
	testHideTabs('ReUnixCron');
	testHideTabs('ReQuartzCron');
});