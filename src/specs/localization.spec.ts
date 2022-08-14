import { testLocalization } from './../common/localization/localization';

describe('Localization', () => {
	beforeEach(() => cy.visit('/'));

	testLocalization('ReCron');
	testLocalization('ReUnixCron');
	testLocalization('ReQuartzCron');
});