export const dayQuartzTab = () => ({
  everyWeekDay: {
    root: 'c-every-weekday c-segment',
    switcher: {
      root: 'c-every-weekday-check',
      field: 'c-every-weekday-option',
      label: 'c-every-weekday-option-label'
    }
  },
  incrementWeekDay: {
    root: 'c-increment-weekday c-segment',
    switcher: {
      root: 'c-increment-weekday-check',
      field: 'c-increment-weekday-option',
      label: 'c-increment-weekday-option-label'
    },
    everyField: 'c-increment-weekday-every',
    label2: 'c-increment-weekday-option-label2',
    fromField: 'c-increment-weekday-from'
  },
  incrementMonthDay: {
    root: 'c-increment-monthday c-segment',
    switcher: {
      root: 'c-increment-monthday-check',
      field: 'c-increment-monthday-option',
      label: 'c-increment-monthday-option-label'
    },
    everyField: 'c-increment-monthday-every',
    label2: 'c-increment-monthday-option-label2',
    fromField: 'c-increment-monthday-from',
    label3: 'c-increment-monthday-option-label3',
  },
  andWeekDay: {
    root: 'c-and-weekday c-segment',
    switcher: {
      root: 'c-and-weekday-check',
      field: 'c-and-weekday-option',
      label: 'c-and-weekday-option-label'
    },
    list: {
      root: 'c-and-weekday-list',
      item: 'c-and-weekday-item',
      control: {
        root: 'c-and-weekday-item-check',
        field: 'c-and-weekday-item-field',
        label: 'c-and-weekday-item-label'
      }
    }
  },
  rangeWeekDay: {
    root: 'c-range c-segment',
    switcher: {
      root: 'c-range-check',
      field: 'c-range-option',
      label: 'c-range-option-label'
    },
    fromField: 'c-range-from',
    label2: 'c-range-option-label2',
    toField: 'c-range-to'
  },

  andMonthDay: {
    root: 'c-and-monthday c-segment',
    switcher: {
      root: 'c-and-monthday-check',
      field: 'c-and-monthday-option',
      label: 'c-and-monthday-option-label'
    },
    list: {
      root: 'c-and-monthday-list',
      item: 'c-and-monthday-item',
      control: {
        root: 'c-and-monthday-item-check',
        field: 'c-and-monthday-item-field',
        label: 'c-and-monthday-item-label'
      }
    }
  },
  lastMonthDay: {
    root: 'c-last-monthday c-segment',
    switcher: {
      root: 'c-last-monthday-check',
      field: 'c-last-monthday-option',
      label: 'c-last-monthday-option-label'
    }
  },
  lastWeekDay: {
    root: 'c-last-weekday c-segment',
    switcher: {
      root: 'c-last-weekday-check',
      field: 'c-last-weekday-option',
      label: 'c-last-weekday-option-label'
    }
  },
  lastNth: {
    root: 'c-last-nth c-segment',
    switcher: {
      root: 'c-last-nth-check',
      field: 'c-last-nth-option',
      label: 'c-last-nth-option-label'
    },
    field: 'c-last-nth-weekday',
    label2: 'c-last-nth-option-label2'
  },
  dayBeforeEnd: {
    root: 'c-day-before-end c-segment',
    switcher: {
      root: 'c-day-before-end-check',
      field: 'c-day-before-end-option'
    },
    field: 'c-day-before-end-monthday',
    label2: 'c-day-before-end-option-label'
  },
  nearest: {
    root: 'c-nearest c-segment',
    switcher: {
      root: 'c-nearest-check',
      field: 'c-nearest-option',
      label: 'c-nearest-option-label'
    },
    field: 'c-nearest-monthday',
    label2: 'c-nearest-option-label2'
  },
  nth: {
    root: 'c-nth c-segment',
    switcher: {
      root: 'c-nth-check',
      field: 'c-nth-option',
      label: 'c-nth-option-label'
    },
    everyField: 'c-nth-every',
    everyWeekDayField: 'c-nth-every-weekday',
    label2: 'c-nth-option-label2'
  }
});
