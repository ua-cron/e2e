import { getSharedHelper } from './../../helpers';
import { shouldExactClassesMatch } from './../utils';

export const testContent = (code: string, selector: string, exact = false) => {
  const { findInContainer } = getSharedHelper(code);

  it('content', () => {
    return findInContainer(selector)
      .should('exist')
      .should('be.visible')
      .should('have.length', 1)
      .then(el => shouldExactClassesMatch(el, selector, exact));
  });
};
