import { testActiveTab } from './../common/active-tab';

export const activeTab = (beforeEach: () => void) => describe('Active Tab', () => {
  beforeEach();

  testActiveTab('UnixCron');
  testActiveTab('QuartzCron');
});
