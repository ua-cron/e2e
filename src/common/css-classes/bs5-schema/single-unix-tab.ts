import { Type } from '@sbzen/cron-core';
import { SingleUnixTabSchema } from './../schema';

export const simpleUnixTab = (type: Type): SingleUnixTabSchema => ({
  every: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
  },
  increment: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  },
  and: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    list: {
      root: 'ps-3 pt-1 row',
      item: type === Type.MONTH ? 'col-3 col-md-2' : 'col-2 col-md-1',
      control: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label'
      }
    }
  },
  range: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    fromField: 'form-control form-control-sm w-auto mx-1',
    label2: '',
    toField: 'form-control form-control-sm w-auto ms-1'
  }
});
