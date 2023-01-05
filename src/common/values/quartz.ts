import { Type } from '@sbzen/cron-core';

import { getSharedHelper } from './../helpers';

export const testQuartz = (type: string) => {
	const { findInContainer } = getSharedHelper(type);

	const actions = [
		{
			value: '0,1,2,3 2/4 6/2 ? 2-7 SUN,MON 2019/1',
			checker: () => {
				findInContainer(`.c-tab.${Type.SECONDS}`).click();
				findInContainer('.c-and-check .c-and-option').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="0"] .c-and-item-field').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="1"] .c-and-item-field').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="2"] .c-and-item-field').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="3"] .c-and-item-field').should('be.checked');

				findInContainer(`.c-tab.${Type.MINUTES}`).click();
				findInContainer('.c-increment-check .c-increment-option').should('be.checked');
				findInContainer('.c-increment .c-increment-every').should('have.value', '4');
				findInContainer('.c-increment .c-increment-from').should('have.value', '2');
			}
		},
		{
			value: '0,1,2,3 2/4 6/2 ? 1,3 SUN,MON 2019/1',
			checker: () => {
				findInContainer(`.c-tab.${Type.MONTH}`).click();
				findInContainer('.c-and-check .c-and-option').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="JAN"] .c-and-item-field').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="FEB"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="MAR"] .c-and-item-field').should('be.checked');
				findInContainer('.c-and .c-and-item[item-value="APR"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="MAY"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="JUN"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="JUL"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="AUG"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="SEP"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="OCT"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="NOV"] .c-and-item-field').should('not.be.checked');
				findInContainer('.c-and .c-and-item[item-value="DEC"] .c-and-item-field').should('not.be.checked');
			}
		},
		{
			value: '2,0,4,3,1 0/1 3/2 ? * SUN,MON *',
			checker: () => {
				findInContainer(`.c-tab.${Type.DAY}`).click();
				findInContainer('.c-and-weekday .c-and-weekday-option').should('be.checked');
				findInContainer('.c-and-weekday-list .c-and-weekday-item[item-value="SUN"] .c-and-weekday-item-field').should('be.checked');
				findInContainer('.c-and-weekday-list .c-and-weekday-item[item-value="MON"] .c-and-weekday-item-field').should('be.checked');
			}
		}
	];

	actions.forEach(({ value, checker }) => {
		it(`check value ${value}`, () => {
			findInContainer('[data-cron="value"]')
				.invoke('val', value)
				.trigger('change')
				.type(' ');
			checker();
		})
	})
}
