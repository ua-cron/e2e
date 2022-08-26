import { Type } from '@sbzen/cron-core';
import { baseQuartzSchema } from './../schema';

export const dayQuartzTab = (): ReturnType<typeof baseQuartzSchema>['content'][Type.DAY] => ({
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
  rangeWeekDay: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    fromField: 'form-control form-control-sm mx-1',
    label2: '',
    toField: 'form-control form-control-sm ml-1'
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
  },
  lastMonthDay: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    }
  },
  lastWeekDay: {
    root: 'form-group',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    }
  },
  lastNth: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    field: 'form-control form-control-sm mx-1',
    label2: ''
  },
  dayBeforeEnd: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input'
    },
    field: 'form-control form-control-sm mx-1',
    label2: ''
  },
  nearest: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    field: 'form-control form-control-sm mx-1',
    label2: ''
  },
  nth: {
    root: 'form-group form-inline',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm mx-1',
    everyWeekDayField: 'form-control form-control-sm mx-1',
    label2: ''
  }
});
