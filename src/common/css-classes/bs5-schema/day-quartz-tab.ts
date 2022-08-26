import { Type } from '@sbzen/cron-core';
import { baseQuartzSchema } from './../schema';

export const dayQuartzTab = (): ReturnType<typeof baseQuartzSchema>['content'][Type.DAY] => ({
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
    label2: '',
    fromField: 'form-control form-control-sm w-auto mx-1'
  },
  incrementMonthDay: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm w-auto mx-1',
    label2: '',
    fromField: 'form-control form-control-sm w-auto mx-1',
    label3: '',
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
  rangeWeekDay: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    fromField: 'form-control form-control-sm w-auto mx-1',
    label2: '',
    toField: 'form-control form-control-sm w-auto ms-1'
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
  },
  lastMonthDay: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    }
  },
  lastWeekDay: {
    root: 'mb-3',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    }
  },
  lastNth: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    field: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  },
  dayBeforeEnd: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input'
    },
    field: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  },
  nearest: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    field: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  },
  nth: {
    root: 'mb-3 align-items-center d-flex',
    switcher: {
      root: 'form-check',
      field: 'form-check-input',
      label: 'form-check-label'
    },
    everyField: 'form-control form-control-sm w-auto mx-1',
    everyWeekDayField: 'form-control form-control-sm w-auto mx-1',
    label2: ''
  }
});
