import { Type } from '@sbzen/cron-core';

import { CronType } from './../enums/cron-type.enum';
import { getSharedHelper } from './helpers';

export const testDisabled = (type: string) => {
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

  describe(type, () => {
    tabs.forEach(t => {
      it(`state should be disabled ${t}`, () => {
        findInContainer(`.c-tabs .c-tab.${t}`).click();
        testTab();
      });
    });

    function testTab() {
      clickDisable();
      findInContainer('.c-tab-content').find('button, input, select').should('be.disabled');

      clickDisable();
      getSwitchers().filter('input').should('not.be.disabled');
      getSwitchers()
        .filter('input:checked')
        .closest('.form-group')
        .find('button, input, select')
        .should('not.be.disabled');
    }

    function clickDisable() {
      findInContainer('[data-cron-action="disable"]').click();
    }

    function getSwitchers() {
      return findInContainer('.c-tab-content .c-segment > .form-check').find('.form-check-label, .form-check-input');
    }
  });
};
