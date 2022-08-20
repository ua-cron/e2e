import { testLocalization } from './../common/localization/localization';

export const localization = (beforeEach: () => void) => describe('Localization', () => {
  beforeEach();

  testLocalization('UnixCron');
  testLocalization('QuartzCron');
});
