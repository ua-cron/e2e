import { Type } from '@sbzen/cron-core';
import { pathSchema, mergeSchemas } from './../utils';
import { baseQuartzSchema as quartzSchema } from './../schema';

import { simpleQuartzTab } from './single-quartz-tab';
import { dayQuartzTab } from './day-quartz-tab';

export const baseQuartzSchema = (classPrefix = '') => {
  const schema = pathSchema({
    root: '',
    tabs: {
      root: 'mb-2 nav nav-tabs',
      item: 'nav-item',
      link: 'nav-link',
      active: 'active'
    },
    content: {
      root: '',
      [Type.SECONDS]: simpleQuartzTab(Type.SECONDS),
      [Type.MINUTES]: simpleQuartzTab(Type.MINUTES),
      [Type.HOURS]: simpleQuartzTab(Type.HOURS),
      [Type.MONTH]: simpleQuartzTab(Type.MONTH),
      [Type.YEAR]: simpleQuartzTab(Type.YEAR),
      [Type.DAY]: dayQuartzTab()
    }
  }, classPrefix);

  return mergeSchemas(quartzSchema(), schema);
};
