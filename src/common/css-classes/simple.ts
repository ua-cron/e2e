import { Type, Segment, getList, getMonthCodes } from '@sbzen/cron-core';

import { CronType } from './../../enums/cron-type.enum';
import { getSharedHelper } from './../helpers';
import { cssClassesHelpers } from './helpers';
import { getSingleClasses } from './simple.classes';

export const testSimple = (type: string, cssClassPrefix = '') => {
  const { getContentByTab, getTabs, checkClasses } = cssClassesHelpers(type, cssClassPrefix);
  const { getCronType } = getSharedHelper(type);

  const tabs = getCronType() === CronType.QUARTZ ? [
    Type.DAY,
    Type.HOURS,
    Type.MINUTES,
    Type.MONTH,
    Type.SECONDS,
    Type.YEAR
  ] : [
    Type.DAY,
    Type.HOURS,
    Type.MINUTES,
    Type.MONTH
  ];

  tabs
    .filter(t => t !== Type.DAY)
    .forEach(tab => {
      const tabClasses = getSingleClasses(type, tab, cssClassPrefix);
      describe(`tab ${tab}`, () => {
        beforeEach(() => getTabs().filter(`.${tab}`).click());

        it (`tab content ${tab}`, () => {
          getTabs().filter(`.${tab}`).click();
          getContentByTab(tab).should('be.visible');
        });

        it (`tab ${tab} every segment`, () => {
          const { every } = tabClasses;
          checkClasses(tab, every);
        });

        it (`tab ${tab} increment segment`, () => {
          const { increment } = tabClasses;
          checkClasses(tab, increment);
        });

        it (`tab ${tab} and segment`, () => {
          const { and } = tabClasses;

          checkClasses(tab, {
            box: and.box,
            switcherBox: and.switcherBox,
            switcher: and.switcher,
            label: and.label,
            itemsBox: and.itemsBox
          });

          let items = getList(Segment.seconds);
          if (tab === Type.HOURS) {
            items = getList(Segment.hours);
          } else if (tab === Type.MONTH) {
            items = getMonthCodes();
          } else if (tab === Type.MINUTES) {
            items = getList(Segment.minutes);
          } else if (tab === Type.YEAR) {
            items = getList(Segment.year);
          }

          items.forEach(({ value }) => {
            const postfix = `[item-value="${value}"]`;
            const classes = {
              itemWrapper: and.itemWrapper(postfix),
              itemBox: and.itemBox(postfix),
              itemControl: and.itemControl(postfix),
              itemLabel: and.itemLabel(postfix)
            };
            checkClasses(tab, classes);
          });
        });

        it (`tab ${tab} range segment`, () => {
          const { range } = tabClasses;
          checkClasses(tab, range);
        });
      });
    });
};
