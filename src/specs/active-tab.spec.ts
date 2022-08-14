import { testActiveTab } from './../common/active-tab';

describe('Active Tab', () => {
	testActiveTab('ReCron');
	testActiveTab('ReUnixCron');
	testActiveTab('ReQuartzCron');
});
