import { testValues } from './../common/values/values';

export const values = (beforeEach: () => void) => describe('Values', () => {
  beforeEach();

  testValues('QuartzCron');
  // testTabs('UnixCron');
});
