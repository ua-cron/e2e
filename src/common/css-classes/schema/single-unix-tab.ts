export const simpleUnixTab = () => ({
  every: {
    root: 'c-every c-segment',
    switcher: {
      root: 'c-every-check',
      field: 'c-every-option',
      label: 'c-every-option-label'
    },
  },
  increment: {
    root: 'c-increment c-segment',
    switcher: {
      root: 'c-increment-check',
      field: 'c-increment-option',
      label: 'c-increment-option-label'
    },
    everyField: 'c-increment-every',
    label2: 'c-increment-option-label2'
  },
  and: {
    root: 'c-and c-segment',
    switcher: {
      root: 'c-and-check',
      field: 'c-and-option',
      label: 'c-and-option-label'
    },
    list: {
      root: 'c-and-list',
      item: 'c-and-item',
      control: {
        root: 'c-and-item-check',
        field: 'c-and-item-field',
        label: 'c-and-item-label'
      }
    }
  },
  range: {
    root: 'c-range c-segment',
    switcher: {
      root: 'c-range-check',
      field: 'c-range-option',
      label: 'c-range-option-label'
    },
    fromField: 'c-range-from',
    label2: 'c-range-option-label2',
    toField: 'c-range-to'
  }
});
