import { testHideTabs } from './../common/hide-tabs';

export const hideTabs = (beforeEach: () => void) => describe('Hide Tabs', () => {
  beforeEach();

  testHideTabs('UnixCron');
  testHideTabs('QuartzCron');
});
