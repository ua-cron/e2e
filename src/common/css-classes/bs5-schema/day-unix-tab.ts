import { Type } from '@sbzen/cron-core';
import { baseUnixSchema } from './../schema';

export const dayUnixTab = (): ReturnType<typeof baseUnixSchema>['content'][Type.DAY] => ({
  everyWeekDay: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    }
  },
  incrementWeekDay: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  },
  incrementMonthDay: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  },
  andWeekDay: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    list: {
      root: 'ps-3 pt-1 row',
      item: 'col-3 col-md-2',
      control: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label'
      }
    }
  },
  andMonthDay: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    list: {
      root: 'ps-3 pt-1 row',
      item: 'col-2 col-md-1',
      control: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label'
      }
    }
  }
});
