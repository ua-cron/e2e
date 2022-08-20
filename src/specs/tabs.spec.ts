import { testTabs } from './../common/tabs';

export const tabs = (beforeEach: () => void) => describe('Tabs', () => {
  beforeEach();

  testTabs('UnixCron');
  testTabs('QuartzCron');
});
