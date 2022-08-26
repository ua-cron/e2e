import { Type } from '@sbzen/cron-core';
import { baseUnixSchema } from './../schema';

export const dayUnixTab = (): ReturnType<typeof baseUnixSchema>['content'][Type.DAY] => ({
  everyWeekDay: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    }
  },
  incrementWeekDay: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm mx-1',
    label2: '',
    fromField: 'form-control form-control-sm mx-1'
  },
  incrementMonthDay: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm mx-1',
    label2: '',
    fromField: 'form-control form-control-sm mx-1',
    label3: '',
  },
  andWeekDay: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    list: {
      root: 'pl-3 pt-1 row',
      item: 'col-3 col-md-2',
      control: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label'
      }
    }
  },
  andMonthDay: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    list: {
      root: 'pl-3 pt-1 row',
      item: 'col-2 col-md-1',
      control: {
        root: 'form-check',
        field: 'form-check-input',
        label: 'form-check-label'
      }
    }
  }
});
