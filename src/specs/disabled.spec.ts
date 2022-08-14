import { testDisabled } from './../common/disabled';

describe('Disabled', () => {
	testDisabled('ReCron');
	testDisabled('ReUnixCron');
	testDisabled('ReQuartzCron');
});