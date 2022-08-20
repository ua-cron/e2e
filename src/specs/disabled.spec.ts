import { testDisabled } from './../common/disabled';

export const disabled = (beforeEach: () => void) => describe('Disabled', () => {
  beforeEach();

  testDisabled('UnixCron');
  testDisabled('QuartzCron');
});
