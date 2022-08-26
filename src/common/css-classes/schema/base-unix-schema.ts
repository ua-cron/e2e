import { Type } from '@sbzen/cron-core';
import { pathSchema } from './../utils';
import { simpleUnixTab } from './single-unix-tab';
import { dayUnixTab } from './day-unix-tab';

export const baseUnixSchema = () => pathSchema({
  root: 'c-host c-unix',
  tabs: {
    root: 'c-tabs',
    item: 'c-tab-item',
    link: 'c-tab',
    active: ''
  },
  content: {
    root: 'c-tab-content',
    [Type.MINUTES]: simpleUnixTab(),
    [Type.HOURS]: simpleUnixTab(),
    [Type.MONTH]: simpleUnixTab(),
    [Type.DAY]: dayUnixTab()
  }
});
