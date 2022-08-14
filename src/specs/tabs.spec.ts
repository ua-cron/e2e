import { testTabs } from './../common/tabs';

export const tabs = () => describe('Tabs', () => {
	testTabs('ReCron');
	testTabs('ReUnixCron');
	testTabs('ReQuartzCron');
});