import { Type } from '@sbzen/cron-core';
import { simpleQuartzTab } from './single-quartz-tab';
import { simpleUnixTab } from './single-unix-tab';

export type SingleQuartzTabSchema = ReturnType<typeof simpleQuartzTab>;
export type SingleUnixTabSchema = ReturnType<typeof simpleUnixTab>;
