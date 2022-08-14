import { testActiveTab } from './../common/active-tab';

export const activeTab = () => describe('Active Tab', () => {
    testActiveTab('ReCron');
    testActiveTab('ReUnixCron');
    testActiveTab('ReQuartzCron');
});
