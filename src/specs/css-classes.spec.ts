import { testCssClasses } from './../common/css-classes/css-classes';
import { testBaseCssClasses } from './../common/css-classes/base-css-classes';
import { testBs4Classes } from './../common/css-classes/bs4-css-classes';
import { testBs5Classes } from './../common/css-classes/bs5-css-classes';

export const cssClasses = (beforeEach: () => void, bs5 = true) => describe('CSS Classes', () => {
  beforeEach();

  testBaseCssClasses('UnixCron');
  testBaseCssClasses('QuartzCron');

  if (bs5) {
    testBaseCssClasses('Bs5UnixCron');
    testBaseCssClasses('Bs5QuartzCron');
  }

  testBs4Classes('UnixCron');
  testBs4Classes('QuartzCron');

  if (bs5) {
    testBs5Classes('Bs5UnixCron');
    testBs5Classes('Bs5QuartzCron');
  }

  // legacy
  testCssClasses('UnixCron', 'bs4');
  testCssClasses('QuartzCron', 'bs4');

  if (bs5) {
    testCssClasses('Bs5UnixCron', 'bs5');
    testCssClasses('Bs5QuartzCron', 'bs5');
  }
});
