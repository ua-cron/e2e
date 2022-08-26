import { Type } from '@sbzen/cron-core';
import { pathSchema } from './../utils';
import { simpleQuartzTab } from './single-quartz-tab';
import { dayQuartzTab } from './day-quartz-tab';

export const baseQuartzSchema = () => pathSchema({
  root: 'c-host c-quartz',
  tabs: {
    root: 'c-tabs',
    item: 'c-tab-item',
    link: 'c-tab',
    active: ''
  },
  content: {
    root: 'c-tab-content',
    [Type.SECONDS]: simpleQuartzTab(),
    [Type.MINUTES]: simpleQuartzTab(),
    [Type.HOURS]: simpleQuartzTab(),
    [Type.MONTH]: simpleQuartzTab(),
    [Type.YEAR]: simpleQuartzTab(),
    [Type.DAY]: dayQuartzTab()
  }
});
