import { Type } from '@sbzen/cron-core';

import { getSharedHelper } from './../../helpers';
import { baseQuartzSchema } from './../schema';
import { shouldExactClassesMatch } from './../utils';

export const testDayQuartzTab = (code: string, contentSelector: string, schema: ReturnType<typeof baseQuartzSchema>['content'][Type.DAY], tabLink: string, exact = false) => {
  const { findInContainer } = getSharedHelper(code);
  const find = (selector: string) => findInContainer(`${contentSelector}[tab-name="${Type.DAY}"] ${selector}`);

  describe(Type.DAY, () => {
    beforeEach(() => findInContainer(`${tabLink}.${Type.DAY}`).click());

    it('every week day', () => {
      const classes = schema.everyWeekDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact));
        });
    });

    it('increment week day', () => {
      const classes = schema.incrementWeekDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(`select${classes.everyField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.everyField, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact))
            .get(`select${classes.fromField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.fromField, exact));
        });
    });

    it('increment month day', () => {
      const classes = schema.incrementMonthDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(`select${classes.everyField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.everyField, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact))
            .get(`select${classes.fromField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.fromField, exact))
            .get(classes.label3)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label3, exact));
        });
    });

    it('and week day', () => {
      const classes = schema.andWeekDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(classes.list.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.list.root, exact))
            .children()
            .each(el => {
              expect(el.is(classes.list.item)).to.be.true;

              return cy
                .wrap(el)
                .then(el => shouldExactClassesMatch(el, classes.list.item, exact))
                .within(() => {
                  return cy
                    .get(classes.list.control.root)
                    .should('exist')
                    .should('be.visible')
                    .should('have.length', 1)
                    .then(el => shouldExactClassesMatch(el, classes.list.control.root, exact))
                    .get(`input${classes.list.control.field}`)
                    .should('exist')
                    .should('be.visible')
                    .should('have.length', 1)
                    .then(el => shouldExactClassesMatch(el, classes.list.control.field, exact))
                    .get(classes.list.control.label)
                    .should('exist')
                    .should('be.visible')
                    .should('have.length', 1)
                    .then(el => shouldExactClassesMatch(el, classes.list.control.label, exact));
                });
             });
        })
    });

    it('range week day', () => {
      const classes = schema.rangeWeekDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(`select${classes.fromField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.fromField, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact))
            .get(`select${classes.toField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.toField, exact));
        });
    });

    it('and month day', () => {
      const classes = schema.andMonthDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(classes.list.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.list.root, exact))
            .children()
            .each(el => {
              expect(el.is(classes.list.item)).to.be.true;

              return cy
                .wrap(el)
                .then(el => shouldExactClassesMatch(el, classes.list.item, exact))
                .within(() => {
                  return cy
                    .get(classes.list.control.root)
                    .should('exist')
                    .should('be.visible')
                    .should('have.length', 1)
                    .then(el => shouldExactClassesMatch(el, classes.list.control.root, exact))
                    .get(`input${classes.list.control.field}`)
                    .should('exist')
                    .should('be.visible')
                    .should('have.length', 1)
                    .then(el => shouldExactClassesMatch(el, classes.list.control.field, exact))
                    .get(classes.list.control.label)
                    .should('exist')
                    .should('be.visible')
                    .should('have.length', 1)
                    .then(el => shouldExactClassesMatch(el, classes.list.control.label, exact));
                });
              });
        })
    });

    it('last month day', () => {
      const classes = schema.lastMonthDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact));
        });
    });

    it('last week day', () => {
      const classes = schema.lastWeekDay;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact));
        });
    });

    it('last nth', () => {
      const classes = schema.lastNth;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(`select${classes.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.field, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact));
        });
    });

    it('day before end', () => {
      const classes = schema.dayBeforeEnd;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(`select${classes.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.field, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact));
        });
    });

    it('nearest', () => {
      const classes = schema.nearest;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(`select${classes.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.field, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact));
        });
    });

    it('nth', () => {
      const classes = schema.nth;
      return find(classes.root)
        .should('exist')
        .should('be.visible')
        .should('have.length', 1)
        .then(el => shouldExactClassesMatch(el, classes.root, exact))
        .within(() => {
          return cy
            .get(classes.switcher.root)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.root, exact))
            .get(`input${classes.switcher.field}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.field, exact))
            .get(classes.switcher.label)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.switcher.label, exact))
            .get(`select${classes.everyField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.everyField, exact))
            .get(`select${classes.everyWeekDayField}`)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.everyWeekDayField, exact))
            .get(classes.label2)
            .should('exist')
            .should('be.visible')
            .should('have.length', 1)
            .then(el => shouldExactClassesMatch(el, classes.label2, exact));
        });
    });
  });
};
