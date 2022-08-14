import { Type } from '@sbzen/cron-core';

import { CronType } from './../enums/cron-type.enum';
import { getSharedHelper } from './helpers';

export const testTabChange = (type: string) => {
  const { findInContainer, getCronType } = getSharedHelper(type);
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

  describe(`Tab change should work with ${type}`, () => {
    tabs.forEach(t => {
      it(`${t} tab should work`, () => {
        findInContainer(`.c-tab.${t}`).click();
        findInContainer(`[data-cron-active-tab="${t}"]`).should('have.length', 1);
      });
    });
  });
};
