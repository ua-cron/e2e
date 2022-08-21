import { Type, Segment, getList, getDaysOfWeekCodes, getMonthCodes } from '@sbzen/cron-core';
import { CronType } from './../../enums/cron-type.enum';
import { getHelper } from './helpers';

export const dayTabLocalization = (type: string) => {
  const {
    checkLocalizationField,
    activateTab,
    buildFieldSelector,

    getCronType
  } = getHelper(type);

  describe(`test tab: ${Type.DAY}`, () => {
    beforeEach(() => activateTab(Type.DAY));

    it('every weekday segment', () => {
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'every.label'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-every-weekday .c-every-weekday-option-label`
      );
    });

    it('increment weekday segment', () => {
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'dayOfWeekIncrement.label1'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-weekday .c-increment-weekday-option-label`
      );
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'dayOfWeekIncrement.label2'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-weekday .c-increment-weekday-option-label2`
      );

      if (getCronType() === CronType.QUARTZ) {
        getDaysOfWeekCodes().forEach(({ label }, i) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfWeek.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-weekday .c-increment-weekday-from option[value="${i + 1}"]`
          );
        });
      }
    });

    it('increment day of month segment', () => {
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'dayOfMonthIncrement.label1'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-monthday .c-increment-monthday-option-label`
      );
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'dayOfMonthIncrement.label2'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-monthday .c-increment-monthday-option-label2`
      );

      if (getCronType() === CronType.QUARTZ) {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfMonthIncrement.label3'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-monthday .c-increment-monthday-option-label3`
        );

        getList(Segment.dayOfMonth, true).forEach(({ label }, i) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfMonth.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-increment-monthday .c-increment-monthday-from option[value="${i + 1}"]`
          );
        });
      }
    });

    it('and day of week segment', () => {
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'dayOfWeekAnd.label'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-and-weekday .c-and-weekday-option-label`
      );

      getDaysOfWeekCodes().forEach(({ value, label }) => {
        checkLocalizationField(
          `[data-cron-action-value="common.dayOfWeek.${label.toLowerCase()}"]`,
          `.c-tab-content[tab-name="${Type.DAY}"] .c-and-weekday .c-and-weekday-item[item-value="${value}"] .c-and-weekday-item-label`
        );
      });
    });

    it('and day of month segment', () => {
      checkLocalizationField(
        buildFieldSelector(Type.DAY, 'dayOfMonthAnd.label'),
        `.c-tab-content[tab-name="${Type.DAY}"] .c-and-monthday .c-and-monthday-option-label`
      );
    });

    if (getCronType() === CronType.QUARTZ) {
      it('day of month last day segment', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfMonthLastDay.label'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-last-monthday .c-last-monthday-option-label`
        );
      });

      it('day of month last day week segment', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfMonthLastDayWeek.label'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-last-weekday .c-last-weekday-option-label`
        );
      });

      it('day of week last nth day week segment', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfWeekLastNTHDayWeek.label1'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-last-nth .c-last-nth-option-label`
        );
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfWeekLastNTHDayWeek.label2'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-last-nth .c-last-nth-option-label2`
        );

        getDaysOfWeekCodes().forEach(({ label }, i) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfWeek.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-last-nth .c-last-nth-weekday option[value="${i + 1}L"]`
          );
        });
      });

      it('day of week range', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfWeekRange.label1'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-range .c-range-option-label`
        );
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfWeekRange.label2'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-range .c-range-option-label2`
        );
        getDaysOfWeekCodes().forEach(({ label, value }) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfWeek.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-range .c-range-from option[value="${value}"]`
          );
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfWeek.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-range .c-range-to option[value="${value}"]`
          );
        });
      });

      it('day of month days before end month segment', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfMonthDaysBeforeEndMonth.label'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-day-before-end .c-day-before-end-option-label`
        );
      });

      it('day of month nearest week day of month segment', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfMonthNearestWeekDayOfMonth.label1'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-nearest .c-nearest-option-label`
        );
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfMonthNearestWeekDayOfMonth.label2'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-nearest .c-nearest-option-label2`
        );

        getList(Segment.dayOfMonth, true).forEach(({ label }, i) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfMonth.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-nearest .c-nearest-monthday option[value="${i + 1}W"]`
          );
        });
      });

      it('day of week nth week day of month segment', () => {
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfWeekNTHWeekDayOfMonth.label1'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-nth .c-nth-option-label`
        );
        checkLocalizationField(
          buildFieldSelector(Type.DAY, 'dayOfWeekNTHWeekDayOfMonth.label2'),
          `.c-tab-content[tab-name="${Type.DAY}"] .c-nth .c-nth-option-label2`
        );

        getList(Segment.dayOfMonth, true).slice(0, 5).forEach(({ label }, i) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfMonth.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-nth .c-nth-every option[value="${i + 1}"]`
          );
        });

        getDaysOfWeekCodes().forEach(({ label }, i) => {
          checkLocalizationField(
            `[data-cron-action-value="common.dayOfWeek.${label.toLowerCase()}"]`,
            `.c-tab-content[tab-name="${Type.DAY}"] .c-nth .c-nth-every-weekday option[value="${i + 1}"]`
          );
        });
      });
    }
  });
};
