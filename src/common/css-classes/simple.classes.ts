import { Type } from '@sbzen/cron-core';

import { CronType } from './../../enums/cron-type.enum';
import { getSharedHelper } from './../helpers';

export const getSingleClasses = (type: string, tab: Type, cssClassPrefix = '', bs: 'bs4'|'bs5') => {
  if (bs === 'bs4') {
    return getSingleClassesBs4(type, tab, cssClassPrefix);
  }
  return getSingleClassesBs5(type, tab, cssClassPrefix);
};

export const getSingleClassesBs5 = (type: string, tab: Type, cssClassPrefix = '') => {
  const { getCronType } = getSharedHelper(type);

  return {
    every: (() => {
      const box = `.${cssClassPrefix}mb-3.c-every.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-every-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-every-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-every-option-label`;

      return {
        box,
        switcherBox,
        switcher,
        label
      }
    })(),

    increment: (() => {
      const box = `.${cssClassPrefix}mb-3.${cssClassPrefix}align-items-center.${cssClassPrefix}d-flex.c-increment.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-increment-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-increment-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-increment-option-label`;
      const label2 = `${box} label.c-increment-option-label2`;
      const control = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}w-auto.${cssClassPrefix}mx-1.c-increment-every`;
      const control2 = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}w-auto.${cssClassPrefix}ms-1.c-increment-from`;

      const quartz = getCronType() !== CronType.QUARTZ ? {} : {
        control2
      };

      return {
        box,
        switcherBox,
        switcher,
        label,
        label2,
        control,
        ...quartz
      }
    })(),

    and: (() => {
      const box = `.${cssClassPrefix}mb-3.c-and.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-and-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-and-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-and-option-label`;
      const itemsBox = `${box} .${cssClassPrefix}row.${cssClassPrefix}ps-3.${cssClassPrefix}pt-1.c-and-list`;

      const itemWrapper = (postfix: string) => {
        if (tab === Type.MONTH) {
          return `${itemsBox} .${cssClassPrefix}col-3.${cssClassPrefix}col-md-2.c-and-item${postfix}`;
        }
        return `${itemsBox} .${cssClassPrefix}col-2.${cssClassPrefix}col-md-1.c-and-item${postfix}`;
      };
      const itemBox = (postfix: string) => `${itemWrapper(postfix)} .${cssClassPrefix}form-check.c-and-item-check`;

      return {
        box,
        switcherBox,
        switcher,
        label,
        itemsBox,
        itemWrapper,
        itemBox,
        itemControl: (postfix: string) => `${itemBox(postfix)} input.${cssClassPrefix}form-check-input.c-and-item-field`,
        itemLabel: (postfix: string) => `${itemBox(postfix)} label.${cssClassPrefix}form-check-label.c-and-item-label`,
      }
    })(),

    range: (() => {
      const box = `.${cssClassPrefix}mb-3.${cssClassPrefix}align-items-center.${cssClassPrefix}d-flex.c-range.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-range-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-range-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-range-option-label`;
      const label2 = `${box} label.c-range-option-label2`;
      const control = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}w-auto.${cssClassPrefix}mx-1.c-range-from`;
      const control2 = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}w-auto.${cssClassPrefix}ms-1.c-range-to`;

      const quartz = getCronType() !== CronType.QUARTZ ? {} : {
        control2
      };

      return {
        box,
        switcherBox,
        switcher,
        label,
        label2,
        control,
        ...quartz
      }
    })()
  };
};


export const getSingleClassesBs4 = (type: string, tab: Type, cssClassPrefix = '') => {
  const { getCronType } = getSharedHelper(type);

  return {
    every: (() => {
      const box = `.${cssClassPrefix}form-group.c-every.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-every-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-every-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-every-option-label`;

      return {
        box,
        switcherBox,
        switcher,
        label
      }
    })(),

    increment: (() => {
      const box = `.${cssClassPrefix}form-group.${cssClassPrefix}form-inline.c-increment.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-increment-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-increment-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-increment-option-label`;
      const label2 = `${box} label.c-increment-option-label2`;
      const control = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}mx-1.c-increment-every`;
      const control2 = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}ml-1.c-increment-from`;

      const quartz = getCronType() !== CronType.QUARTZ ? {} : {
        control2
      };

      return {
        box,
        switcherBox,
        switcher,
        label,
        label2,
        control,
        ...quartz
      }
    })(),

    and: (() => {
      const box = `.${cssClassPrefix}form-group.c-and.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-and-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-and-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-and-option-label`;
      const itemsBox = `${box} .${cssClassPrefix}row.${cssClassPrefix}pl-3.${cssClassPrefix}pt-1.c-and-list`;

      const itemWrapper = (postfix: string) => {
        if (tab === Type.MONTH) {
          return `${itemsBox} .${cssClassPrefix}col-3.${cssClassPrefix}col-md-2.c-and-item${postfix}`;
        }
        return `${itemsBox} .${cssClassPrefix}col-2.${cssClassPrefix}col-md-1.c-and-item${postfix}`;
      };
      const itemBox = (postfix: string) => `${itemWrapper(postfix)} .${cssClassPrefix}form-check.c-and-item-check`;

      return {
        box,
        switcherBox,
        switcher,
        label,
        itemsBox,
        itemWrapper,
        itemBox,
        itemControl: (postfix: string) => `${itemBox(postfix)} input.${cssClassPrefix}form-check-input.c-and-item-field`,
        itemLabel: (postfix: string) => `${itemBox(postfix)} label.${cssClassPrefix}form-check-label.c-and-item-label`,
      }
    })(),

    range: (() => {
      const box = `.${cssClassPrefix}form-group.${cssClassPrefix}form-inline.c-range.c-segment`;
      const switcherBox = `${box} .${cssClassPrefix}form-check.c-range-check`;
      const switcher = `${switcherBox} input.${cssClassPrefix}form-check-input.c-range-option`;
      const label = `${switcherBox} label.${cssClassPrefix}form-check-label.c-range-option-label`;
      const label2 = `${box} label.c-range-option-label2`;
      const control = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}mx-1.c-range-from`;
      const control2 = `${box} select.${cssClassPrefix}form-control.${cssClassPrefix}form-control-sm.${cssClassPrefix}ml-1.c-range-to`;

      const quartz = getCronType() !== CronType.QUARTZ ? {} : {
        control2
      };

      return {
        box,
        switcherBox,
        switcher,
        label,
        label2,
        control,
        ...quartz
      }
    })()
  };
};
