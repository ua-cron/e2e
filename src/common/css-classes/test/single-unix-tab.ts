import { Type } from '@sbzen/cron-core';

import { getSharedHelper } from './../../helpers';
import { SingleUnixTabSchema } from './../schema';
import { shouldExactClassesMatch } from './../utils';

export const testSingleUnixTab = (code: string, contentSelector: string, schema: SingleUnixTabSchema, tabLink: string, type: Type, exact = false) => {
  const { findInContainer } = getSharedHelper(code);
  const find = (selector: string) => findInContainer(`${contentSelector}[tab-name="${type}"] ${selector}`);

  describe(type, () => {
    beforeEach(() => findInContainer(`${tabLink}.${type}`).click());

    it('every', () => {
      const classes = schema.every;
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

    it('increment', () => {
      const classes = schema.increment;
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
            .then(el => shouldExactClassesMatch(el, classes.label2, exact));
        });
    });

    it('and', () => {
      const classes = schema.and;
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

    it('range', () => {
      const classes = schema.range;
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
  });
};
