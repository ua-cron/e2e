import { testHideTabs } from './../common/hide-tabs';

export const hideTabs = () => describe('Hide Tabs', () => {
  testHideTabs('ReCron');
  testHideTabs('ReUnixCron');
  testHideTabs('ReQuartzCron');
});
