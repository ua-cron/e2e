export const dayUnixTab = () => ({
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
    label2: 'c-increment-weekday-option-label2'
  },
  incrementMonthDay: {
    root: 'c-increment-monthday c-segment',
    switcher: {
      root: 'c-increment-monthday-check',
      field: 'c-increment-monthday-option',
      label: 'c-increment-monthday-option-label'
    },
    everyField: 'c-increment-monthday-every',
    label2: 'c-increment-monthday-option-label2'
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
  }
});
