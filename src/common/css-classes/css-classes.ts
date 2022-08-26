import { getSharedHelper } from './../helpers';
import { cssClassesHelpers } from './helpers';
import { testDay } from './day'
import { testSimple } from './simple';

export const testCssClasses = (type: string, bs: 'bs4'|'bs5') => {
  const { findInContainer } = getSharedHelper(type);
  describe(`${type} ${bs}`, () => {
    describe('should work without cssClassPrefix', () => {
      const { getTabsContainer, getTabs, getTabsList } = cssClassesHelpers(type);

      it('tabs classes presented', () => {
        getTabsContainer().should('be.visible');
        getTabs().first().should('have.class', 'active');

        getTabsList().forEach(tab => {
          getTabs().filter(`.${tab}`).should('be.visible');
        });
      });

      testDay(type, '', bs);
      describe('simple tabs content', () => testSimple(type, '', bs))
    });

    describe('should work with cssClassPrefix', () => {
      const cssClassPrefix = 'my-';
      const { getTabsContainer, getTabs, getTabsList } = cssClassesHelpers(type, cssClassPrefix);

      beforeEach(() => {
        findInContainer('[data-cron-action="add-css-class-prefix"]').click();
      });

      it('tabs classes presented', () => {
        getTabsContainer().should('be.visible');
        getTabs().first().should('have.class', 'my-active');

        getTabsList().forEach(tab => {
          getTabs().filter(`.${tab}`).should('be.visible');
        });
      });

      testDay(type, cssClassPrefix, bs);
      describe('simple tabs content', () => testSimple(type, cssClassPrefix, bs))
    });
  });
};
