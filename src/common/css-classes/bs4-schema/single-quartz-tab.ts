import { Type } from '@sbzen/cron-core';
import { SingleQuartzTabSchema } from './../schema';

export const simpleQuartzTab = (type: Type): SingleQuartzTabSchema => ({
  every: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
  },
  increment: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm mx-1',
    label2: '',
    fromField: 'form-control form-control-sm ml-1'
  },
  and: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    list: {
      root: 'pl-3 pt-1 row',
      item: type === Type.MONTH ? 'col-3 col-md-2' : 'col-2 col-md-1',
      control: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label'
      }
    }
  },
  range: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    fromField: 'form-control form-control-sm mx-1',
    label2: '',
    toField: 'form-control form-control-sm ml-1'
  }
});
