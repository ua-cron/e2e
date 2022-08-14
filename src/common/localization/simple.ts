import { Type, Segment, getList, getDaysOfWeekCodes } from '@sbzen/cron-core';

import { CronType } from './../../enums/cron-type.enum';
import { getHelper } from './helpers';

export const simpleTabLocalization = (type: string, tab: Type) => {
	const {
		checkLocalizationField,
		activateTab,
		buildFieldSelector,
		getCronType
	} = getHelper(type);

	describe(`test tab: ${tab}`, () => {
		testEverySegment();
		testIncrementSegment();
		testAndSegment();
		testRangeSegment();
	});

	function testEverySegment() {
		it(`test every segment of tab: ${tab}`, () => {
			activateTab(tab);
			checkLocalizationField(
				buildFieldSelector(tab, 'every.label'),
				`.c-tab-content[tab-name="${tab}"] .c-every .c-every-option-label`
			);
		});
	}

	function testIncrementSegment() {
		it(`test increment segment of tab: ${tab}`, () => {
			activateTab(tab);
			checkLocalizationField(
				buildFieldSelector(tab, 'increment.label1'),
				`.c-tab-content[tab-name="${tab}"] .c-increment .c-increment-option-label`
			);

			if (getCronType() === CronType.QUARTZ) {
				checkLocalizationField(
					buildFieldSelector(tab, 'increment.label2'),
					`.c-tab-content[tab-name="${tab}"] .c-increment .c-increment-option-label2`
				);
				if (tab === Type.MONTH) {
					getList(Segment.month).forEach(({ value }, i) => {
						checkLocalizationField(
							`[data-cron-action-value="common.month.${value.toLowerCase()}"]`,
							`.c-tab-content[tab-name="${tab}"] .c-increment .c-increment-from option[value="${i + 1}"]`
						);
					});
				}
			}
		});
	}

	function testAndSegment() {
		it(`test and segment of tab: ${tab}`, () => {
			activateTab(tab);
			checkLocalizationField(
				buildFieldSelector(tab, 'and.label'),
				`.c-tab-content[tab-name="${tab}"] .c-and .c-and-option-label`
			);

			if (tab === Type.MONTH) {
				getDaysOfWeekCodes().forEach(({ value, label }) => {
					checkLocalizationField(
						`[data-cron-action-value="common.month.${label.toLowerCase()}"]`,
						`.c-tab-content[tab-name="${tab}"] .c-and .c-and-item[item-value="${value}"] .c-and-item-label`
					);
				});
			}
		});
	}

	function testRangeSegment() {
		it(`test range segment of tab: ${tab}`, () => {
			activateTab(tab);
			checkLocalizationField(
				buildFieldSelector(tab, 'range.label1'),
				`.c-tab-content[tab-name="${tab}"] .c-range .c-range-option-label`
			);
			checkLocalizationField(
				buildFieldSelector(tab, 'range.label2'),
				`.c-tab-content[tab-name="${tab}"] .c-range .c-range-option-label2`
			);

			if (tab === Type.MONTH) {
				getList(Segment.month).forEach(({ value }, i) => {
					checkLocalizationField(
						`[data-cron-action-value="common.month.${value.toLowerCase()}"]`,
						`.c-tab-content[tab-name="${tab}"] .c-range .c-range-from option[value="${i + 1}"]`
					);
					checkLocalizationField(
						`[data-cron-action-value="common.month.${value.toLowerCase()}"]`,
						`.c-tab-content[tab-name="${tab}"] .c-range .c-range-to option[value="${i + 1}"]`
					);
				});
			}
		});
	}
};
