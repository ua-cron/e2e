import { Type } from '@sbzen/cron-core';
import { getSharedHelper } from './../helpers';
import { CronType } from './../../enums/cron-type.enum';
import { baseQuartzSchema, baseUnixSchema } from './bs5-schema';
import { testSingleQuartzTab, testSingleUnixTab, testTabs, testRoot, testContent, testDayQuartzTab, testDayUnixTab } from './test';

export const testBs5Classes = (code: string) => {
  const { getCronType, findInContainer } = getSharedHelper(code);
  const cronType = getCronType();

  const testQuartz = (classPrefix?: string) => {
    const { tabs, content, root } = baseQuartzSchema(classPrefix);
    const tabLink = tabs.link;

    testRoot(code, root, true);
    testTabs(code, tabs.root, tabs.item, tabLink, tabs.active, true);
    testContent(code, content.root, true);

    testDayQuartzTab(code, content.root, content[Type.DAY], tabLink, true);
    testSingleQuartzTab(code, content.root, content[Type.SECONDS], tabLink, Type.SECONDS, true);
    testSingleQuartzTab(code, content.root, content[Type.MINUTES], tabLink, Type.MINUTES, true);
    testSingleQuartzTab(code, content.root, content[Type.HOURS], tabLink, Type.HOURS, true);
    testSingleQuartzTab(code, content.root, content[Type.MONTH], tabLink, Type.MONTH, true);
    testSingleQuartzTab(code, content.root, content[Type.YEAR], tabLink, Type.YEAR, true);
  };

  const testUnix = (classPrefix?: string) => {
    const { tabs, content, root } = baseUnixSchema(classPrefix);
    const tabLink = tabs.link;

    testRoot(code, root, true);
    testTabs(code, tabs.root, tabs.item, tabLink, tabs.active, true);
    testContent(code, content.root, true);
    testDayUnixTab(code, content.root, content[Type.DAY], tabLink, true);
    testSingleUnixTab(code, content.root, content[Type.MINUTES], tabLink, Type.MINUTES, true);
    testSingleUnixTab(code, content.root, content[Type.HOURS], tabLink, Type.HOURS, true);
    testSingleUnixTab(code, content.root, content[Type.MONTH], tabLink, Type.MONTH, true);
  };

  describe(`Bootstrap5 classes: ${code}, ${cronType}`, () => {
    if (cronType === CronType.QUARTZ) {
      return testQuartz();
    }
    return testUnix();
  });

  describe(`Bootstrap5 classes: ${code}, ${cronType} with prefix "my-"`, () => {
    beforeEach(() => {
      findInContainer('[data-cron-action="add-css-class-prefix"]').click();
    });

    if (cronType === CronType.QUARTZ) {
      return testQuartz('my-');
    }
    return testUnix('my-');
  });
};
