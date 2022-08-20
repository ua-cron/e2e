import { testCssClasses } from './../common/css-classes/css-classes';

export const cssClasses = (beforeEach: () => void) => describe('CSS Classes', () => {
  beforeEach();

  testCssClasses('UnixCron');
  testCssClasses('QuartzCron');
});
