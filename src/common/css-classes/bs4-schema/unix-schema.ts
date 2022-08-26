import { Type } from '@sbzen/cron-core';
import { pathSchema, mergeSchemas } from './../utils';
import { baseUnixSchema as unixSchema } from './../schema';

import { simpleUnixTab } from './single-unix-tab';
import { dayUnixTab } from './day-unix-tab';

export const baseUnixSchema = (classPrefix = '') => {
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
      [Type.MINUTES]: simpleUnixTab(Type.MINUTES),
      [Type.HOURS]: simpleUnixTab(Type.HOURS),
      [Type.MONTH]: simpleUnixTab(Type.MONTH),
      [Type.DAY]: dayUnixTab()
    }
  }, classPrefix);

  return mergeSchemas(unixSchema(), schema);
};
