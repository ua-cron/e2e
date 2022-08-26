import { Type } from '@sbzen/cron-core';
import { CronType } from './../../../enums/cron-type.enum';

import { getSharedHelper } from './../../helpers';
import { shouldExactClassesMatch } from './../utils';

export const testTabs = (code: string, root: string, item: string, link: string, active: string, exact = false) => {
  const { findInContainer, getCronType } = getSharedHelper(code);
  const type = getCronType();

  const tabs = type === CronType.QUARTZ ? [
    Type.SECONDS,
    Type.MINUTES,
    Type.HOURS,
    Type.DAY,
    Type.MONTH,
    Type.YEAR
  ] : [
    Type.MINUTES,
    Type.HOURS,
    Type.DAY,
    Type.MONTH
  ];

  it('tabs', () => {
    return findInContainer(root)
      .should('exist')
      .should('be.visible')
      .should('have.length', 1)
      .then(el => shouldExactClassesMatch(el, root, exact))
      .children()
      .each((el, i) => {
        expect(el.is(item), `child is not matched to selector "${item}"`).to.be.true;

        const linkExactSelector = `${link}.${tabs[i]}${!!i ? '' : active}`;
        return cy
          .wrap(el)
          .then(el => shouldExactClassesMatch(el, item, exact))
          .find(link)
          .should('exist')
          .should('be.visible')
          .should('have.length', 1)
          .then(el => shouldExactClassesMatch(el, linkExactSelector, exact));
      });
  });

  it('tabs activation', () => {
    return findInContainer(link)
      .each((el, i) => {
        const linkExactSelector = `${link}.${tabs[i]}${active}`;

        return cy
          .wrap(el)
          .click()
          .then(el => shouldExactClassesMatch(el, linkExactSelector, exact));
      });
  });
};
