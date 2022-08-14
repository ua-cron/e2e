import { testDisabled } from './../common/disabled';

export const disabled = () => describe('Disabled', () => {
  testDisabled('ReCron');
  testDisabled('ReUnixCron');
  testDisabled('ReQuartzCron');
});
