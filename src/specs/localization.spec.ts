import { testLocalization } from './../common/localization/localization';

export const localization = () => describe('Localization', () => {
  testLocalization('ReCron');
  testLocalization('ReUnixCron');
  testLocalization('ReQuartzCron');
});
