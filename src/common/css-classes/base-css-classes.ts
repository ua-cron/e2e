import { Type } from '@sbzen/cron-core';
import { getSharedHelper } from './../helpers';
import { CronType } from './../../enums/cron-type.enum';
import { baseQuartzSchema, baseUnixSchema } from './schema';
import { testSingleQuartzTab, testSingleUnixTab, testTabs, testRoot, testContent, testDayQuartzTab, testDayUnixTab } from './test';

export const testBaseCssClasses = (code: string) => {
  const { getCronType } = getSharedHelper(code);
  const cronType = getCronType();

  const testQuartz = () => {
    const { tabs, content, root } = baseQuartzSchema();
    const tabLink = tabs.link;

    testRoot(code, root);
    testTabs(code, tabs.root, tabs.item, tabLink, tabs.active);
    testContent(code, content.root);

    testDayQuartzTab(code, content.root, content[Type.DAY], tabLink);
    testSingleQuartzTab(code, content.root, content[Type.SECONDS], tabLink, Type.SECONDS);
    testSingleQuartzTab(code, content.root, content[Type.MINUTES], tabLink, Type.MINUTES);
    testSingleQuartzTab(code, content.root, content[Type.HOURS], tabLink, Type.HOURS);
    testSingleQuartzTab(code, content.root, content[Type.MONTH], tabLink, Type.MONTH);
    testSingleQuartzTab(code, content.root, content[Type.YEAR], tabLink, Type.YEAR);
  };

  const testUnix = () => {
    const { tabs, content, root } = baseUnixSchema();
    const tabLink = tabs.link;

    testRoot(code, root, true);
    testTabs(code, tabs.root, tabs.item, tabLink, tabs.active);
    testContent(code, content.root);
    testDayUnixTab(code, content.root, content[Type.DAY], tabLink);
    testSingleUnixTab(code, content.root, content[Type.MINUTES], tabLink, Type.MINUTES);
    testSingleUnixTab(code, content.root, content[Type.HOURS], tabLink, Type.HOURS);
    testSingleUnixTab(code, content.root, content[Type.MONTH], tabLink, Type.MONTH);
  };

  describe(`Base classes: ${code}, ${cronType}`, () => {
    if (cronType === CronType.QUARTZ) {
      return testQuartz();
    }
    return testUnix();
  });
};
